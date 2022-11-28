import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
**/
export declare class DimensionMetric extends SpeakeasyBase {
    dimension?: Dimension;
    metrics?: Metric[];
}
