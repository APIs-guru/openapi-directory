import { SpeakeasyBase } from "../../../internal/utils";
import { PendingAssignmentData } from "./pendingassignmentdata";
import { Range } from "./range";
/**
 * List of pending assignments
**/
export declare class PendingAssignmentList extends SpeakeasyBase {
    items: PendingAssignmentData[];
    range?: Range;
}
