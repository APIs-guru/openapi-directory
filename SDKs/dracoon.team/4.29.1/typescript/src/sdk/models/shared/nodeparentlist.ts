import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeParent } from "./nodeparent";



// NodeParentList
/** 
 * List of parent nodes
**/
export class NodeParentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: NodeParent })
  items?: NodeParent[];
}
