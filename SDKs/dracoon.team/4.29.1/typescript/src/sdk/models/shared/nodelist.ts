import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";
import { Range } from "./range";


// NodeList
/** 
 * List of nodes
**/
export class NodeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Node })
  items: Node[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
