import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PauseProposalRequest
/** 
 * Request message to pause serving for an already-finalized proposal.
**/
export class PauseProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
