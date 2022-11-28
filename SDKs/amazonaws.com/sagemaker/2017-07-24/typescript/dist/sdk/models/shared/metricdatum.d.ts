import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlMetricEnumEnum } from "./automlmetricenumenum";
import { MetricSetSourceEnum } from "./metricsetsourceenum";
/**
 * Information about the metric for a candidate produced by an AutoML job.
**/
export declare class MetricDatum extends SpeakeasyBase {
    metricName?: AutoMlMetricEnumEnum;
    set?: MetricSetSourceEnum;
    value?: number;
}
