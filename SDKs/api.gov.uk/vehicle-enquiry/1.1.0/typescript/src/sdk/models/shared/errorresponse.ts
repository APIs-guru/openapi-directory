import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Errors } from "./errors";


// ErrorResponse
/** 
 * Error Response
**/
export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Errors })
  errors?: Errors[];
}
