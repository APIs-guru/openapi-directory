import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Transaction } from "./transaction";
export declare class GetTransactions extends SpeakeasyBase {
    ok: boolean;
    transactions: Transaction[];
}
