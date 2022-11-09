import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodeParent } from "./nodeparent";


// NodeParentList
/** 
 * List of parent nodes
**/
export class NodeParentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.NodeParent })
  items?: NodeParent[];
}
