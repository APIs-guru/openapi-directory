import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFileUploadUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileUploadURL" })
  fileUploadUrl?: string;
}
