import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateWebhookRequest
/** 
 * Request model for creating a webhook
**/
export class CreateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTypeNames" })
  eventTypeNames: string[];

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=triggerExampleEvent" })
  triggerExampleEvent?: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}
