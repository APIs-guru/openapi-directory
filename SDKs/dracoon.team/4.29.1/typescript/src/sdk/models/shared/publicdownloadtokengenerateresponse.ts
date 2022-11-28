import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicDownloadTokenGenerateResponse
/** 
 * Download URL
**/
export class PublicDownloadTokenGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
