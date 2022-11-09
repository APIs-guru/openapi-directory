import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUploadStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;
}
