import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityCommitment } from "./capacitycommitment";



// ListCapacityCommitmentsResponse
/** 
 * The response for ReservationService.ListCapacityCommitments.
**/
export class ListCapacityCommitmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityCommitments", elemType: CapacityCommitment })
  capacityCommitments?: CapacityCommitment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
