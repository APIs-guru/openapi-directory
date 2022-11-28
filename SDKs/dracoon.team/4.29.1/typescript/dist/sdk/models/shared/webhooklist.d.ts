import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Range } from "./range";
/**
 * List of webhooks
**/
export declare class WebhookList extends SpeakeasyBase {
    items: Webhook[];
    range: Range;
}
