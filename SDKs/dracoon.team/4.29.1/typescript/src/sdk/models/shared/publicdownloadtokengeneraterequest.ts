import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicDownloadTokenGenerateRequest
/** 
 * Request model for generating download URL
**/
export class PublicDownloadTokenGenerateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;
}
