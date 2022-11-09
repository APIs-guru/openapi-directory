import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExpenseField } from "./expensefield";


// LineItemFields
/** 
 * A structure that holds information about the different lines found in a document's tables.
**/
export class LineItemFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineItemExpenseFields", elemType: shared.ExpenseField })
  lineItemExpenseFields?: ExpenseField[];
}
