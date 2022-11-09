import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SplitCapacityCommitmentRequest
/** 
 * The request for ReservationService.SplitCapacityCommitment.
**/
export class SplitCapacityCommitmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=slotCount" })
  slotCount?: string;
}
