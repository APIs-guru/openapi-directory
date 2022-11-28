import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfigError } from "./imageconfigerror";
import { ImageConfig } from "./imageconfig";



// ImageConfigResponse
/** 
 * Response to GetFunctionConfiguration request.
**/
export class ImageConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ImageConfigError;

  @SpeakeasyMetadata({ data: "json, name=ImageConfig" })
  imageConfig?: ImageConfig;
}
