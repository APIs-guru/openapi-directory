import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeletedNode } from "./deletednode";
import { Range } from "./range";



// DeletedNodeVersionsList
/** 
 * List of deleted versions of nodes
**/
export class DeletedNodeVersionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DeletedNode })
  items: DeletedNode[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
