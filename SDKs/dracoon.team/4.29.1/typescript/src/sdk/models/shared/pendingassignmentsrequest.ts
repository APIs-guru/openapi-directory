import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PendingAssignment } from "./pendingassignment";


// PendingAssignmentsRequest
/** 
 * Request model for handling pending assignments
**/
export class PendingAssignmentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PendingAssignment })
  items: PendingAssignment[];
}
