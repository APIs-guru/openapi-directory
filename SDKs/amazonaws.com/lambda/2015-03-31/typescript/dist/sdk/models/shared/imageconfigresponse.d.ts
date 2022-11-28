import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfigError } from "./imageconfigerror";
import { ImageConfig } from "./imageconfig";
/**
 * Response to GetFunctionConfiguration request.
**/
export declare class ImageConfigResponse extends SpeakeasyBase {
    error?: ImageConfigError;
    imageConfig?: ImageConfig;
}
