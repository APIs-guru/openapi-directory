import { SpeakeasyBase } from "../../../internal/utils";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";
/**
 * This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
**/
export declare class AddEvidencePaymentDisputeRequest extends SpeakeasyBase {
    evidenceType?: string;
    files?: FileEvidence[];
    lineItems?: OrderLineItems[];
}
