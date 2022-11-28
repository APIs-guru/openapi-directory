import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateFileUploadResponse
/** 
 * Upload channel information
**/
export class CreateFileUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;

  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl: string;
}
