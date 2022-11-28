import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingAssignment } from "./pendingassignment";



// PendingAssignmentsRequest
/** 
 * Request model for handling pending assignments
**/
export class PendingAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PendingAssignment })
  items: PendingAssignment[];
}
