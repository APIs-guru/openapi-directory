import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUploadStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;
}
