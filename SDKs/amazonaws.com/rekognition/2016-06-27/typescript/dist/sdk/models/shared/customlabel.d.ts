import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
/**
 * A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
**/
export declare class CustomLabel extends SpeakeasyBase {
    confidence?: number;
    geometry?: Geometry;
    name?: string;
}
