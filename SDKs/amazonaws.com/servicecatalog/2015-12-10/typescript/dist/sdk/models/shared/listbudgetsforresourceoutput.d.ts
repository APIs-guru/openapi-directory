import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
export declare class ListBudgetsForResourceOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    nextPageToken?: string;
}
