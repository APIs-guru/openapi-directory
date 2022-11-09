import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageConfigError } from "./imageconfigerror";
import { ImageConfig } from "./imageconfig";


// ImageConfigResponse
/** 
 * Response to GetFunctionConfiguration request.
**/
export class ImageConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: ImageConfigError;

  @Metadata({ data: "json, name=ImageConfig" })
  imageConfig?: ImageConfig;
}
