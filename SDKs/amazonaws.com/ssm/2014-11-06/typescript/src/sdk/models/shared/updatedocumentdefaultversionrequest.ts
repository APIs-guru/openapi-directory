import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDocumentDefaultVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
