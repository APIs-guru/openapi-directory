import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeletedNodeSummary } from "./deletednodesummary";
import { Range } from "./range";


// DeletedNodeSummaryList
/** 
 * List of deleted nodes
**/
export class DeletedNodeSummaryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DeletedNodeSummary })
  items: DeletedNodeSummary[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
