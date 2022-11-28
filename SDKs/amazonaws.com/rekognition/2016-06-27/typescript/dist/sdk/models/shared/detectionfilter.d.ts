import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of parameters that allow you to filter out certain results from your returned results.
**/
export declare class DetectionFilter extends SpeakeasyBase {
    minBoundingBoxHeight?: number;
    minBoundingBoxWidth?: number;
    minConfidence?: number;
}
