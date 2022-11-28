import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";



// SearchAllAssignmentsResponse
/** 
 * The response for ReservationService.SearchAllAssignments.
**/
export class SearchAllAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignments", elemType: Assignment })
  assignments?: Assignment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
