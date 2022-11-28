import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDisputeSummary } from "./paymentdisputesummary";
/**
 * This type defines the base response payload of the getPaymentDisputeSummaries method. Each payment dispute that matches the input criteria is returned under the paymentDisputeSummaries array.
**/
export declare class DisputeSummaryResponse extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    paymentDisputeSummaries?: PaymentDisputeSummary[];
    prev?: string;
    total?: number;
}
