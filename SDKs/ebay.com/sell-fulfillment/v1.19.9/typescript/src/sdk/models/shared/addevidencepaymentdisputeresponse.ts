import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddEvidencePaymentDisputeResponse
/** 
 * This type is used by the response payload of the addEvidence method. Its only field is an unique identifier of an evidence set.
**/
export class AddEvidencePaymentDisputeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceId" })
  evidenceId?: string;
}
