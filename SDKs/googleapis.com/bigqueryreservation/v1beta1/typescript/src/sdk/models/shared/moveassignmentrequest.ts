import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveAssignmentRequest
/** 
 * The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
**/
export class MoveAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationId" })
  destinationId?: string;
}
