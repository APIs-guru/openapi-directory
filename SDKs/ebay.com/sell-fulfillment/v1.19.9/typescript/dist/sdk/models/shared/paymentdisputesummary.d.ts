import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
/**
 * This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
**/
export declare class PaymentDisputeSummary extends SpeakeasyBase {
    amount?: SimpleAmount;
    buyerUsername?: string;
    closedDate?: string;
    openDate?: string;
    orderId?: string;
    paymentDisputeId?: string;
    paymentDisputeStatus?: string;
    reason?: string;
    respondByDate?: string;
}
