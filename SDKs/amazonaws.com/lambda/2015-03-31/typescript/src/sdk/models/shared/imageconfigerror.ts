import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageConfigError
/** 
 * Error response to GetFunctionConfiguration.
**/
export class ImageConfigError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
