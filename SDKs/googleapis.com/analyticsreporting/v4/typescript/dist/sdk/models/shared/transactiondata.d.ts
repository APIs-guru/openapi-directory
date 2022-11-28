import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents details collected when the visitor performs a transaction on the page.
**/
export declare class TransactionData extends SpeakeasyBase {
    transactionId?: string;
    transactionRevenue?: number;
    transactionShipping?: number;
    transactionTax?: number;
}
