import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
**/
export declare class PayoutSummaryResponse extends SpeakeasyBase {
    amount?: Amount;
    payoutCount?: number;
    transactionCount?: number;
}
