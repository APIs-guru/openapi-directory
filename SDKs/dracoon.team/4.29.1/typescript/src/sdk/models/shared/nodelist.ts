import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { Range } from "./range";



// NodeList
/** 
 * List of nodes
**/
export class NodeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Node })
  items: Node[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
