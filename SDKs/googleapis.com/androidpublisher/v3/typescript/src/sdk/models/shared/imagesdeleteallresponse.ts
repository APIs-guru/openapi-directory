import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// ImagesDeleteAllResponse
/** 
 * Response for deleting all images.
**/
export class ImagesDeleteAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted", elemType: Image })
  deleted?: Image[];
}
