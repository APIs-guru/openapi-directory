import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricFormattingTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}
/**
 * [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
**/
export declare class Metric extends SpeakeasyBase {
    alias?: string;
    expression?: string;
    formattingType?: MetricFormattingTypeEnum;
}
