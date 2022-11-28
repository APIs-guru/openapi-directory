import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedNode } from "./subscribednode";
import { Range } from "./range";



// SubscribedNodeList
/** 
 * List of subscribed nodes
**/
export class SubscribedNodeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SubscribedNode })
  items: SubscribedNode[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
