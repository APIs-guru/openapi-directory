import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateFileUploadResponse
/** 
 * Upload channel information
**/
export class CreateFileUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;

  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl: string;
}
