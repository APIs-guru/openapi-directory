import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityCommitment } from "./capacitycommitment";



// SplitCapacityCommitmentResponse
/** 
 * The response for ReservationService.SplitCapacityCommitment.
**/
export class SplitCapacityCommitmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: CapacityCommitment;

  @SpeakeasyMetadata({ data: "json, name=second" })
  second?: CapacityCommitment;
}
