import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityCommitment } from "./capacitycommitment";
/**
 * The response for ReservationService.ListCapacityCommitments.
**/
export declare class ListCapacityCommitmentsResponse extends SpeakeasyBase {
    capacityCommitments?: CapacityCommitment[];
    nextPageToken?: string;
}
