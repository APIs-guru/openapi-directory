import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


// RoomWebhook
/** 
 * Webhook information
**/
export class RoomWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=isAssigned" })
  isAssigned: boolean;

  @Metadata({ data: "json, name=webhook" })
  webhook: Webhook;
}
