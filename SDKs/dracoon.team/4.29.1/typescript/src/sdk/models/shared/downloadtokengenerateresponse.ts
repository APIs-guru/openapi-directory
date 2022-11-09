import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DownloadTokenGenerateResponse
/** 
 * Download URL
**/
export class DownloadTokenGenerateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}
