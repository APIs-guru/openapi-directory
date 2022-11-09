import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MergeCapacityCommitmentsRequest
/** 
 * The request for ReservationService.MergeCapacityCommitments.
**/
export class MergeCapacityCommitmentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityCommitmentIds" })
  capacityCommitmentIds?: string[];
}
