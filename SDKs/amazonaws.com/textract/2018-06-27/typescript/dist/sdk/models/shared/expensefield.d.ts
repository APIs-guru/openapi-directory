import { SpeakeasyBase } from "../../../internal/utils";
import { ExpenseDetection } from "./expensedetection";
import { ExpenseType } from "./expensetype";
/**
 * Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
**/
export declare class ExpenseField extends SpeakeasyBase {
    labelDetection?: ExpenseDetection;
    pageNumber?: number;
    type?: ExpenseType;
    valueDetection?: ExpenseDetection;
}
