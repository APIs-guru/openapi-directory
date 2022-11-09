import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItemGroup } from "./lineitemgroup";
import { ExpenseField } from "./expensefield";


// ExpenseDocument
/** 
 * The structure holding all the information returned by AnalyzeExpense
**/
export class ExpenseDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpenseIndex" })
  expenseIndex?: number;

  @Metadata({ data: "json, name=LineItemGroups", elemType: shared.LineItemGroup })
  lineItemGroups?: LineItemGroup[];

  @Metadata({ data: "json, name=SummaryFields", elemType: shared.ExpenseField })
  summaryFields?: ExpenseField[];
}
