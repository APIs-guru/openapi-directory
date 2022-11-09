import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadEntityDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;
}
