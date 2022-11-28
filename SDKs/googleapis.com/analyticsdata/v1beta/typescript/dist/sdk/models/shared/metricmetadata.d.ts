import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricMetadataBlockedReasonsEnum {
    BlockedReasonUnspecified = "BLOCKED_REASON_UNSPECIFIED",
    NoRevenueMetrics = "NO_REVENUE_METRICS",
    NoCostMetrics = "NO_COST_METRICS"
}
export declare enum MetricMetadataTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    TypeInteger = "TYPE_INTEGER",
    TypeFloat = "TYPE_FLOAT",
    TypeSeconds = "TYPE_SECONDS",
    TypeMilliseconds = "TYPE_MILLISECONDS",
    TypeMinutes = "TYPE_MINUTES",
    TypeHours = "TYPE_HOURS",
    TypeStandard = "TYPE_STANDARD",
    TypeCurrency = "TYPE_CURRENCY",
    TypeFeet = "TYPE_FEET",
    TypeMiles = "TYPE_MILES",
    TypeMeters = "TYPE_METERS",
    TypeKilometers = "TYPE_KILOMETERS"
}
/**
 * Explains a metric.
**/
export declare class MetricMetadata extends SpeakeasyBase {
    apiName?: string;
    blockedReasons?: MetricMetadataBlockedReasonsEnum[];
    category?: string;
    customDefinition?: boolean;
    deprecatedApiNames?: string[];
    description?: string;
    expression?: string;
    type?: MetricMetadataTypeEnum;
    uiName?: string;
}
