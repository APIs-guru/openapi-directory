import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateShareUploadChannelResponse
/** 
 * Upload channel information
**/
export class CreateShareUploadChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;

  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl: string;
}
