import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PresignedUrl } from "./presignedurl";


// PresignedUrlList
/** 
 * List of generated presigned URLs
**/
export class PresignedUrlList extends SpeakeasyBase {
  @Metadata({ data: "json, name=urls", elemType: shared.PresignedUrl })
  urls: PresignedUrl[];
}
