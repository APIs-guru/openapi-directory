import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";


export class AnalyzeExpenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document: Document;
}
