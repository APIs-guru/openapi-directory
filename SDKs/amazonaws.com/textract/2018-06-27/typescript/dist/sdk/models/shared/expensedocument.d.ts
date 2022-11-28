import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemGroup } from "./lineitemgroup";
import { ExpenseField } from "./expensefield";
/**
 * The structure holding all the information returned by AnalyzeExpense
**/
export declare class ExpenseDocument extends SpeakeasyBase {
    expenseIndex?: number;
    lineItemGroups?: LineItemGroup[];
    summaryFields?: ExpenseField[];
}
