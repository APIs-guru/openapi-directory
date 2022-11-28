import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadEntityDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;
}
