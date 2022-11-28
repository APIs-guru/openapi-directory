import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Buyer } from "./buyer";
import { OrderLineItem } from "./orderlineitem";
import { Reference } from "./reference";
/**
 * This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
**/
export declare class Transaction extends SpeakeasyBase {
    amount?: Amount;
    bookingEntry?: string;
    buyer?: Buyer;
    feeType?: string;
    orderId?: string;
    orderLineItems?: OrderLineItem[];
    paymentsEntity?: string;
    payoutId?: string;
    references?: Reference[];
    salesRecordReference?: string;
    totalFeeAmount?: Amount;
    totalFeeBasisAmount?: Amount;
    transactionDate?: string;
    transactionId?: string;
    transactionMemo?: string;
    transactionStatus?: string;
    transactionType?: string;
}
