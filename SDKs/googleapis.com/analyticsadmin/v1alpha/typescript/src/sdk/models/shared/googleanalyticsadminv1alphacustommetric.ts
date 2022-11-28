import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum {
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

export enum GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}

export enum GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
    Event = "EVENT"
}


// GoogleAnalyticsAdminV1alphaCustomMetricInput
/** 
 * A definition for a custom metric.
**/
export class GoogleAnalyticsAdminV1alphaCustomMetricInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
}


// GoogleAnalyticsAdminV1alphaCustomMetric
/** 
 * A definition for a custom metric.
**/
export class GoogleAnalyticsAdminV1alphaCustomMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
}
