import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AsanaNamedResource } from "./asananamedresource";


export class WebhookResponseFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class WebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=filters", elemType: shared.WebhookResponseFilters })
  filters?: WebhookResponseFilters[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=last_failure_at" })
  lastFailureAt?: Date;

  @Metadata({ data: "json, name=last_failure_content" })
  lastFailureContent?: string;

  @Metadata({ data: "json, name=last_success_at" })
  lastSuccessAt?: Date;

  @Metadata({ data: "json, name=resource" })
  resource?: AsanaNamedResource;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;
}
