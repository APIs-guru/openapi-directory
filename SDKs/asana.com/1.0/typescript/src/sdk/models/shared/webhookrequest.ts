import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebhookRequestFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class WebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.WebhookRequestFilters })
  filters?: WebhookRequestFilters[];

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=target" })
  target: string;
}
