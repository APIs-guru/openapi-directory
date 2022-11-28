import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// ImagesUploadResponse
/** 
 * Response for uploading an image.
**/
export class ImagesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;
}
