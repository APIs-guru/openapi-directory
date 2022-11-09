import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscribedNode } from "./subscribednode";
import { Range } from "./range";


// SubscribedNodeList
/** 
 * List of subscribed nodes
**/
export class SubscribedNodeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SubscribedNode })
  items: SubscribedNode[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
