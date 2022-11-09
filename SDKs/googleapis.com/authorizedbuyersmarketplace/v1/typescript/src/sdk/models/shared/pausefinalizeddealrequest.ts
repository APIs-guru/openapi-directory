import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PauseFinalizedDealRequest
/** 
 * Request message for pausing a finalized deal.
**/
export class PauseFinalizedDealRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
