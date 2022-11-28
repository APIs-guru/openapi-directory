import { SpeakeasyBase } from "../../../internal/utils";
import { RoomWebhook } from "./roomwebhook";
import { Range } from "./range";
/**
 * List of webhooks
**/
export declare class RoomWebhookList extends SpeakeasyBase {
    items: RoomWebhook[];
    range: Range;
}
