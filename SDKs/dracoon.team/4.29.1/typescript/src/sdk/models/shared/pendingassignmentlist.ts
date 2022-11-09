import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PendingAssignmentData } from "./pendingassignmentdata";
import { Range } from "./range";


// PendingAssignmentList
/** 
 * List of pending assignments
**/
export class PendingAssignmentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PendingAssignmentData })
  items: PendingAssignmentData[];

  @Metadata({ data: "json, name=range" })
  range?: Range;
}
