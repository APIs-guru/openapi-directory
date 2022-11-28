import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItems } from "./orderlineitems";



// EvidenceRequest
/** 
 * This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
**/
export class EvidenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=requestDate" })
  requestDate?: string;

  @SpeakeasyMetadata({ data: "json, name=respondByDate" })
  respondByDate?: string;
}
