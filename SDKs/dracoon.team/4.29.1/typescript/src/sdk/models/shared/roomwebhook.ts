import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



// RoomWebhook
/** 
 * Webhook information
**/
export class RoomWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAssigned" })
  isAssigned: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
