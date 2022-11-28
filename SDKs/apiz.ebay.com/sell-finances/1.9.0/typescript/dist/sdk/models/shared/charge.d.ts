import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is used by the charge container, which is an array of one or more charges related to the transfer.
**/
export declare class Charge extends SpeakeasyBase {
    cancellationId?: string;
    caseId?: string;
    chargeNetAmount?: Amount;
    inquiryId?: string;
    orderId?: string;
    paymentDisputeId?: string;
    refundId?: string;
    returnId?: string;
}
