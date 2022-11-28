import { SpeakeasyBase } from "../../../internal/utils";
import { FileInfo } from "./fileinfo";
import { OrderLineItems } from "./orderlineitems";
import { TrackingInfo } from "./trackinginfo";
/**
 * This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
**/
export declare class DisputeEvidence extends SpeakeasyBase {
    evidenceId?: string;
    evidenceType?: string;
    files?: FileInfo[];
    lineItems?: OrderLineItems[];
    providedDate?: string;
    requestDate?: string;
    respondByDate?: string;
    shipmentTracking?: TrackingInfo[];
}
