import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";



// SearchAssignmentsResponse
/** 
 * The response for ReservationService.SearchAssignments.
**/
export class SearchAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignments", elemType: Assignment })
  assignments?: Assignment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
