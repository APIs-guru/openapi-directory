import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SplitCapacityCommitmentRequest
/** 
 * The request for ReservationService.SplitCapacityCommitment.
**/
export class SplitCapacityCommitmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slotCount" })
  slotCount?: string;
}
