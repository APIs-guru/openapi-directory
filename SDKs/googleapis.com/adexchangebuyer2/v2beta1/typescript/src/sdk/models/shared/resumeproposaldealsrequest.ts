import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResumeProposalDealsRequest
/** 
 * Request message to resume (unpause) serving for already-finalized deals.
**/
export class ResumeProposalDealsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalDealIds" })
  externalDealIds?: string[];
}
