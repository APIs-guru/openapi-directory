import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemGroup } from "./lineitemgroup";
import { ExpenseField } from "./expensefield";



// ExpenseDocument
/** 
 * The structure holding all the information returned by AnalyzeExpense
**/
export class ExpenseDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpenseIndex" })
  expenseIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=LineItemGroups", elemType: LineItemGroup })
  lineItemGroups?: LineItemGroup[];

  @SpeakeasyMetadata({ data: "json, name=SummaryFields", elemType: ExpenseField })
  summaryFields?: ExpenseField[];
}
