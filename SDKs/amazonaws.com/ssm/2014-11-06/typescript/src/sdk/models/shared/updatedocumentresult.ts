import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentDescription } from "./documentdescription";



export class UpdateDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentDescription" })
  documentDescription?: DocumentDescription;
}
