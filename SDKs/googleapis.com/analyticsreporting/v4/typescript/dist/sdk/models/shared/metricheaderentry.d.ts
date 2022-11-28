import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricHeaderEntryTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    Integer = "INTEGER",
    Float = "FLOAT",
    Currency = "CURRENCY",
    Percent = "PERCENT",
    Time = "TIME"
}
/**
 * Header for the metrics.
**/
export declare class MetricHeaderEntry extends SpeakeasyBase {
    name?: string;
    type?: MetricHeaderEntryTypeEnum;
}
