import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MergeCapacityCommitmentsRequest
/** 
 * The request for ReservationService.MergeCapacityCommitments.
**/
export class MergeCapacityCommitmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityCommitmentIds" })
  capacityCommitmentIds?: string[];
}
