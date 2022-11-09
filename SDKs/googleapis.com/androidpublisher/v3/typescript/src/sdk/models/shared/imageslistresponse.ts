import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";


// ImagesListResponse
/** 
 * Response listing all images.
**/
export class ImagesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];
}
