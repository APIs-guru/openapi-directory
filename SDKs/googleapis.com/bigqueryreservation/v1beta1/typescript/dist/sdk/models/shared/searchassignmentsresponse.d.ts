import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
/**
 * The response for ReservationService.SearchAssignments.
**/
export declare class SearchAssignmentsResponse extends SpeakeasyBase {
    assignments?: Assignment[];
    nextPageToken?: string;
}
