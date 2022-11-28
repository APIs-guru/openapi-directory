import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



// ErrorReason
/** 
 * An error that explains why an action did not succeed.
**/
export class ErrorReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
