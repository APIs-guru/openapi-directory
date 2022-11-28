import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";
/**
 * A representation of an image. Only images up to 30MB in size are supported.
**/
export declare class Image extends SpeakeasyBase {
    imageBytes?: string;
    inputConfig?: InputConfig;
    thumbnailUri?: string;
}
