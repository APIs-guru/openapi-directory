import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceptProposalRequest
/** 
 * Request to accept a proposal.
**/
export class AcceptProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}
