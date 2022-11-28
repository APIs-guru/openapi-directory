import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeletedNodeSummary } from "./deletednodesummary";
import { Range } from "./range";



// DeletedNodeSummaryList
/** 
 * List of deleted nodes
**/
export class DeletedNodeSummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DeletedNodeSummary })
  items: DeletedNodeSummary[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
