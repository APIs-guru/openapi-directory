import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResumeProposalDealsRequest
/** 
 * Request message to resume (unpause) serving for already-finalized deals.
**/
export class ResumeProposalDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalDealIds" })
  externalDealIds?: string[];
}
