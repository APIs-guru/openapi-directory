import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentDescription } from "./documentdescription";


export class CreateDocumentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentDescription" })
  documentDescription?: DocumentDescription;
}
