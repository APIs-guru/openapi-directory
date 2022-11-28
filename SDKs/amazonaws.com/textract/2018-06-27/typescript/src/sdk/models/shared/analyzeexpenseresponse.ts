import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadata } from "./documentmetadata";
import { ExpenseDocument } from "./expensedocument";



export class AnalyzeExpenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @SpeakeasyMetadata({ data: "json, name=ExpenseDocuments", elemType: ExpenseDocument })
  expenseDocuments?: ExpenseDocument[];
}
