import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateWebhookRequest
/** 
 * Request model for updating a webhook
**/
export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTypeNames" })
  eventTypeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerExampleEvent" })
  triggerExampleEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
