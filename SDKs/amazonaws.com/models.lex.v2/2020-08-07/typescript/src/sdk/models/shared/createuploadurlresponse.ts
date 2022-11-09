import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUploadUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=importId" })
  importId?: string;

  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
