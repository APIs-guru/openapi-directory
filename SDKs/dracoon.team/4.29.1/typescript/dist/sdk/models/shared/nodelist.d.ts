import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { Range } from "./range";
/**
 * List of nodes
**/
export declare class NodeList extends SpeakeasyBase {
    items: Node[];
    range: Range;
}
