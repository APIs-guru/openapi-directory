import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptProposalRequest
/** 
 * Request to accept a proposal.
**/
export class AcceptProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}
