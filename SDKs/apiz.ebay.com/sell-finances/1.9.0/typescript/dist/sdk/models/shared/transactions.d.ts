import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
/**
 * This is the base response type of the getTransactions method. The getTransactions response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.
**/
export declare class Transactions extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
    transactions?: Transaction[];
}
