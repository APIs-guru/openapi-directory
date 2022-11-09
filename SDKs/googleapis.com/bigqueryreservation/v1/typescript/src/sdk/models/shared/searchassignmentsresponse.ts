import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";


// SearchAssignmentsResponse
/** 
 * The response for ReservationService.SearchAssignments.
**/
export class SearchAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignments", elemType: shared.Assignment })
  assignments?: Assignment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
