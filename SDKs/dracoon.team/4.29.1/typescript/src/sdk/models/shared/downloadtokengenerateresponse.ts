import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DownloadTokenGenerateResponse
/** 
 * Download URL
**/
export class DownloadTokenGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
