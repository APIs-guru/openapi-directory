import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


// ImagesUploadResponse
/** 
 * Response for uploading an image.
**/
export class ImagesUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;
}
