import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";



// ErrorResponse
/** 
 * Error Response
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Errors })
  errors?: Errors[];
}
