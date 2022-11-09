import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentMetadata } from "./documentmetadata";
import { ExpenseDocument } from "./expensedocument";


export class AnalyzeExpenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @Metadata({ data: "json, name=ExpenseDocuments", elemType: shared.ExpenseDocument })
  expenseDocuments?: ExpenseDocument[];
}
