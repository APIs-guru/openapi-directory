import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItems } from "./orderlineitems";


// EvidenceRequest
/** 
 * This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
**/
export class EvidenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @Metadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];

  @Metadata({ data: "json, name=requestDate" })
  requestDate?: string;

  @Metadata({ data: "json, name=respondByDate" })
  respondByDate?: string;
}
