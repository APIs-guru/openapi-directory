import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacityCommitment } from "./capacitycommitment";
import { CapacityCommitment } from "./capacitycommitment";


// SplitCapacityCommitmentResponse
/** 
 * The response for ReservationService.SplitCapacityCommitment.
**/
export class SplitCapacityCommitmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: CapacityCommitment;

  @Metadata({ data: "json, name=second" })
  second?: CapacityCommitment;
}
