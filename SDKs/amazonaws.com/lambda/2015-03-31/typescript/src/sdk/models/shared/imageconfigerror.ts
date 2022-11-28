import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageConfigError
/** 
 * Error response to GetFunctionConfiguration.
**/
export class ImageConfigError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
