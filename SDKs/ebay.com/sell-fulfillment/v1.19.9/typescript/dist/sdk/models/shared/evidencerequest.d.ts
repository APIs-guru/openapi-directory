import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItems } from "./orderlineitems";
/**
 * This type is used by the evidenceRequests array that is returned in the getPaymentDispute response if one or more evidential documents are being requested to help resolve the payment dispute.
**/
export declare class EvidenceRequest extends SpeakeasyBase {
    evidenceId?: string;
    evidenceType?: string;
    lineItems?: OrderLineItems[];
    requestDate?: string;
    respondByDate?: string;
}
