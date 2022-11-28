import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum {
    MeasurementUnitUnspecified = "MEASUREMENT_UNIT_UNSPECIFIED",
    Standard = "STANDARD",
    Currency = "CURRENCY",
    Feet = "FEET",
    Meters = "METERS",
    Kilometers = "KILOMETERS",
    Miles = "MILES",
    Milliseconds = "MILLISECONDS",
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS"
}
export declare enum GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}
export declare enum GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
    Event = "EVENT"
}
/**
 * A definition for a custom metric.
**/
export declare class GoogleAnalyticsAdminV1alphaCustomMetricInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;
    parameterName?: string;
    restrictedMetricType?: GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[];
    scope?: GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
}
/**
 * A definition for a custom metric.
**/
export declare class GoogleAnalyticsAdminV1alphaCustomMetric extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;
    name?: string;
    parameterName?: string;
    restrictedMetricType?: GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[];
    scope?: GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
}
