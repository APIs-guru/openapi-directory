import { SpeakeasyBase } from "../../../internal/utils";
import { DeletedNode } from "./deletednode";
import { Range } from "./range";
/**
 * List of deleted versions of nodes
**/
export declare class DeletedNodeVersionsList extends SpeakeasyBase {
    items: DeletedNode[];
    range: Range;
}
