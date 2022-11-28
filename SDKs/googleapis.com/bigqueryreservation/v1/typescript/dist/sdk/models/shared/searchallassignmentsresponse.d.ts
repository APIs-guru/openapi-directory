import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
/**
 * The response for ReservationService.SearchAllAssignments.
**/
export declare class SearchAllAssignmentsResponse extends SpeakeasyBase {
    assignments?: Assignment[];
    nextPageToken?: string;
}
