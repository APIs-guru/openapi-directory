import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// BaseResponse
/** 
 * This type defines the fields for any warning error messages.
**/
export class BaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
