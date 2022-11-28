import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PauseProposalRequest
/** 
 * Request message to pause serving for an already-finalized proposal.
**/
export class PauseProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
