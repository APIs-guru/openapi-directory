import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDescription } from "./documentdescription";



export class CreateDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentDescription" })
  documentDescription?: DocumentDescription;
}
