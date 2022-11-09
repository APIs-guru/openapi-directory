import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";


// ImagesDeleteAllResponse
/** 
 * Response for deleting all images.
**/
export class ImagesDeleteAllResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted", elemType: shared.Image })
  deleted?: Image[];
}
