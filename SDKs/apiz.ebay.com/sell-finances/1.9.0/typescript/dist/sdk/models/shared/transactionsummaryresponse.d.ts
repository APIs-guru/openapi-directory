import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
**/
export declare class TransactionSummaryResponse extends SpeakeasyBase {
    adjustmentAmount?: Amount;
    adjustmentBookingEntry?: string;
    adjustmentCount?: number;
    balanceTransferAmount?: Amount;
    balanceTransferBookingEntry?: string;
    balanceTransferCount?: number;
    creditAmount?: Amount;
    creditBookingEntry?: string;
    creditCount?: number;
    disputeAmount?: Amount;
    disputeBookingEntry?: string;
    disputeCount?: number;
    nonSaleChargeAmount?: Amount;
    nonSaleChargeBookingEntry?: string;
    nonSaleChargeCount?: number;
    onHoldAmount?: Amount;
    onHoldBookingEntry?: string;
    onHoldCount?: number;
    refundAmount?: Amount;
    refundBookingEntry?: string;
    refundCount?: number;
    shippingLabelAmount?: Amount;
    shippingLabelBookingEntry?: string;
    shippingLabelCount?: number;
    transferAmount?: Amount;
    transferBookingEntry?: string;
    transferCount?: number;
}
