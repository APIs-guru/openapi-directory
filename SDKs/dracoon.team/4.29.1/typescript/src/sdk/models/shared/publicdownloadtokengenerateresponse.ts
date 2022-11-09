import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicDownloadTokenGenerateResponse
/** 
 * Download URL
**/
export class PublicDownloadTokenGenerateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
