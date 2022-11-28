import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";



// AddEvidencePaymentDisputeRequest
/** 
 * This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
**/
export class AddEvidencePaymentDisputeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileEvidence })
  files?: FileEvidence[];

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];
}
