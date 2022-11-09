import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDocumentDefaultVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
