import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PauseProposalDealsRequest
/** 
 * Request message to pause serving for finalized deals.
**/
export class PauseProposalDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalDealIds" })
  externalDealIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
