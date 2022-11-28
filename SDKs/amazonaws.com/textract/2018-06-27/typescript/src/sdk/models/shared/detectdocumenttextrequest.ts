import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



export class DetectDocumentTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document: Document;
}
