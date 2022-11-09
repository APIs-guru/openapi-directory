import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum {
    MeasurementUnitUnspecified = "MEASUREMENT_UNIT_UNSPECIFIED"
,    Standard = "STANDARD"
,    Currency = "CURRENCY"
,    Feet = "FEET"
,    Meters = "METERS"
,    Kilometers = "KILOMETERS"
,    Miles = "MILES"
,    Milliseconds = "MILLISECONDS"
,    Seconds = "SECONDS"
,    Minutes = "MINUTES"
,    Hours = "HOURS"
}

export enum GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
,    CostData = "COST_DATA"
,    RevenueData = "REVENUE_DATA"
}

export enum GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED"
,    Event = "EVENT"
}


// GoogleAnalyticsAdminV1alphaCustomMetric
/** 
 * A definition for a custom metric.
**/
export class GoogleAnalyticsAdminV1alphaCustomMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[];

  @Metadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
}
