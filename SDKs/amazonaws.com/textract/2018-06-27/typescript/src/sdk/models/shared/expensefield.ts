import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpenseDetection } from "./expensedetection";
import { ExpenseType } from "./expensetype";



// ExpenseField
/** 
 * Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
**/
export class ExpenseField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelDetection" })
  labelDetection?: ExpenseDetection;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ExpenseType;

  @SpeakeasyMetadata({ data: "json, name=ValueDetection" })
  valueDetection?: ExpenseDetection;
}
