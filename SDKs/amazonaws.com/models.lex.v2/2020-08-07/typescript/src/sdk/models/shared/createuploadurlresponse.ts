import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
