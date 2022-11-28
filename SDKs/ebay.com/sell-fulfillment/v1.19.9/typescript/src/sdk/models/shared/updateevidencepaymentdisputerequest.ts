import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";



// UpdateEvidencePaymentDisputeRequest
/** 
 * This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
**/
export class UpdateEvidencePaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileEvidence })
  files?: FileEvidence[];

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];
}
