import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeletedNode } from "./deletednode";
import { Range } from "./range";


// DeletedNodeVersionsList
/** 
 * List of deleted versions of nodes
**/
export class DeletedNodeVersionsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DeletedNode })
  items: DeletedNode[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
