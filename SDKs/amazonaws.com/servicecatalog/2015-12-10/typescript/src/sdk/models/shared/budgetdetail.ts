import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BudgetDetail
/** 
 * Information about a budget.
**/
export class BudgetDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName?: string;
}
