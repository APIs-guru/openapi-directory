import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingAssignmentData } from "./pendingassignmentdata";
import { Range } from "./range";



// PendingAssignmentList
/** 
 * List of pending assignments
**/
export class PendingAssignmentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PendingAssignmentData })
  items: PendingAssignmentData[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;
}
