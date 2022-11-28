import { SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
import { ResponseResourceMetricKey } from "./responseresourcemetrickey";
/**
 * A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
**/
export declare class MetricKeyDataPoints extends SpeakeasyBase {
    dataPoints?: DataPoint[];
    key?: ResponseResourceMetricKey;
}
