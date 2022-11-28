import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptProposalRequest
/** 
 * Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.
**/
export class AcceptProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}
