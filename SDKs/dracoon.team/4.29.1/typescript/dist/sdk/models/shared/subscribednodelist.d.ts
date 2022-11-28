import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedNode } from "./subscribednode";
import { Range } from "./range";
/**
 * List of subscribed nodes
**/
export declare class SubscribedNodeList extends SpeakeasyBase {
    items: SubscribedNode[];
    range: Range;
}
