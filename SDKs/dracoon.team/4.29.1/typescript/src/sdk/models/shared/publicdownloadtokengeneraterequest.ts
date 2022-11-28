import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicDownloadTokenGenerateRequest
/** 
 * Request model for generating download URL
**/
export class PublicDownloadTokenGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
