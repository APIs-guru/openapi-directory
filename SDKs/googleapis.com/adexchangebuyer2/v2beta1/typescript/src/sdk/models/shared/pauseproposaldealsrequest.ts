import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PauseProposalDealsRequest
/** 
 * Request message to pause serving for finalized deals.
**/
export class PauseProposalDealsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalDealIds" })
  externalDealIds?: string[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
