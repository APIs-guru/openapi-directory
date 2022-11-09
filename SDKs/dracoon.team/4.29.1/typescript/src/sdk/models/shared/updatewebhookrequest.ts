import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateWebhookRequest
/** 
 * Request model for updating a webhook
**/
export class UpdateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTypeNames" })
  eventTypeNames?: string[];

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=triggerExampleEvent" })
  triggerExampleEvent?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
