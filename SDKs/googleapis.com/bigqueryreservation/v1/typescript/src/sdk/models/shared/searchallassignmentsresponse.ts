import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";


// SearchAllAssignmentsResponse
/** 
 * The response for ReservationService.SearchAllAssignments.
**/
export class SearchAllAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignments", elemType: shared.Assignment })
  assignments?: Assignment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
