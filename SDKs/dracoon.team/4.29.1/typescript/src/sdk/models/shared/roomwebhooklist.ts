import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomWebhook } from "./roomwebhook";
import { Range } from "./range";


// RoomWebhookList
/** 
 * List of webhooks
**/
export class RoomWebhookList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomWebhook })
  items: RoomWebhook[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
