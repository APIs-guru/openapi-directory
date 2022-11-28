import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpenseField } from "./expensefield";



// LineItemFields
/** 
 * A structure that holds information about the different lines found in a document's tables.
**/
export class LineItemFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineItemExpenseFields", elemType: ExpenseField })
  lineItemExpenseFields?: ExpenseField[];
}
