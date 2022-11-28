import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFileUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileUploadURL" })
  fileUploadUrl?: string;
}
