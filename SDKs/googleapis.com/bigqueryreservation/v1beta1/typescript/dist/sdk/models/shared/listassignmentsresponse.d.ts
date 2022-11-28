import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
/**
 * The response for ReservationService.ListAssignments.
**/
export declare class ListAssignmentsResponse extends SpeakeasyBase {
    assignments?: Assignment[];
    nextPageToken?: string;
}
