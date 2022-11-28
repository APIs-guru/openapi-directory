import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";



export class WebhookResponseFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class WebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: WebhookResponseFilters })
  filters?: WebhookResponseFilters[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=last_failure_at" })
  lastFailureAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_failure_content" })
  lastFailureContent?: string;

  @SpeakeasyMetadata({ data: "json, name=last_success_at" })
  lastSuccessAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: AsanaNamedResource;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
