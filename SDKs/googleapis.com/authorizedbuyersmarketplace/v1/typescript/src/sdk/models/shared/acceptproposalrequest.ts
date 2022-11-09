import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceptProposalRequest
/** 
 * Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.
**/
export class AcceptProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}
