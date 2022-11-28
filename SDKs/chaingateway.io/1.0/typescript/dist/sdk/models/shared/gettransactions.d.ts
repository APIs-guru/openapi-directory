import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
export declare class GetTransactions extends SpeakeasyBase {
    ok: boolean;
    transactions: Transaction[];
}
