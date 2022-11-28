import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * Represents a specific metric.
**/
export declare class Metric extends SpeakeasyBase {
    dimensions?: Dimension[];
    metricName?: string;
    namespace?: string;
}
