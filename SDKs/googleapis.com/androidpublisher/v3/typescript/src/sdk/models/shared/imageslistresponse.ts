import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// ImagesListResponse
/** 
 * Response listing all images.
**/
export class ImagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];
}
