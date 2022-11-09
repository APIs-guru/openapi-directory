import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BudgetDetail
/** 
 * Information about a budget.
**/
export class BudgetDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=BudgetName" })
  budgetName?: string;
}
