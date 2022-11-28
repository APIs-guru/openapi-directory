import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PresignedUrl } from "./presignedurl";



// PresignedUrlList
/** 
 * List of generated presigned URLs
**/
export class PresignedUrlList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urls", elemType: PresignedUrl })
  urls: PresignedUrl[];
}
