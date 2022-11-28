import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PauseFinalizedDealRequest
/** 
 * Request message for pausing a finalized deal.
**/
export class PauseFinalizedDealRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
