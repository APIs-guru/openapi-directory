import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// ErrorReason
/** 
 * An error that explains why an action did not succeed.
**/
export class ErrorReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
