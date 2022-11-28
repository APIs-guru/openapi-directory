import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HeaderTypeEnum {
    HeaderTypeUnspecified = "HEADER_TYPE_UNSPECIFIED",
    Dimension = "DIMENSION",
    MetricTally = "METRIC_TALLY",
    MetricRatio = "METRIC_RATIO",
    MetricCurrency = "METRIC_CURRENCY",
    MetricMilliseconds = "METRIC_MILLISECONDS",
    MetricDecimal = "METRIC_DECIMAL"
}
/**
 * The header information of the columns requested in the report.
**/
export declare class Header extends SpeakeasyBase {
    currencyCode?: string;
    name?: string;
    type?: HeaderTypeEnum;
}
