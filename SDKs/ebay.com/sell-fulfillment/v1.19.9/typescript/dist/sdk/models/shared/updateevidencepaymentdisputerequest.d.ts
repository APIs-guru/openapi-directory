import { SpeakeasyBase } from "../../../internal/utils";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";
/**
 * This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
**/
export declare class UpdateEvidencePaymentDisputeRequest extends SpeakeasyBase {
    evidenceId?: string;
    evidenceType?: string;
    files?: FileEvidence[];
    lineItems?: OrderLineItems[];
}
