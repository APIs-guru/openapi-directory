import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { ExpenseDocument } from "./expensedocument";
export declare class AnalyzeExpenseResponse extends SpeakeasyBase {
    documentMetadata?: DocumentMetadata;
    expenseDocuments?: ExpenseDocument[];
}
