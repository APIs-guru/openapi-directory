import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";



// ListAssignmentsResponse
/** 
 * The response for ReservationService.ListAssignments.
**/
export class ListAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignments", elemType: Assignment })
  assignments?: Assignment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
