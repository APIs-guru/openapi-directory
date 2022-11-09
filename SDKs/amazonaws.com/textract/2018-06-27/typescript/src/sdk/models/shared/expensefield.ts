import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpenseDetection } from "./expensedetection";
import { ExpenseType } from "./expensetype";
import { ExpenseDetection } from "./expensedetection";


// ExpenseField
/** 
 * Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
**/
export class ExpenseField extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelDetection" })
  labelDetection?: ExpenseDetection;

  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=Type" })
  type?: ExpenseType;

  @Metadata({ data: "json, name=ValueDetection" })
  valueDetection?: ExpenseDetection;
}
