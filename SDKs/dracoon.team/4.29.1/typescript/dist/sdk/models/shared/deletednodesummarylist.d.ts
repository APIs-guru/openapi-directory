import { SpeakeasyBase } from "../../../internal/utils";
import { DeletedNodeSummary } from "./deletednodesummary";
import { Range } from "./range";
/**
 * List of deleted nodes
**/
export declare class DeletedNodeSummaryList extends SpeakeasyBase {
    items: DeletedNodeSummary[];
    range: Range;
}
