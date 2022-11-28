import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomWebhook } from "./roomwebhook";
import { Range } from "./range";



// RoomWebhookList
/** 
 * List of webhooks
**/
export class RoomWebhookList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomWebhook })
  items: RoomWebhook[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
