import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
export declare enum CheckCompatibilityRequestCompatibilityFilterEnum {
    CompatibilityUnspecified = "COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
/**
 * The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
**/
export declare class CheckCompatibilityRequest extends SpeakeasyBase {
    compatibilityFilter?: CheckCompatibilityRequestCompatibilityFilterEnum;
    dimensionFilter?: FilterExpression;
    dimensions?: Dimension[];
    metricFilter?: FilterExpression;
    metrics?: Metric[];
}
