import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// BaseResponse
/** 
 * This type defines the fields for any warning error messages.
**/
export class BaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
