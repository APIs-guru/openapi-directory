import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricMetadataBlockedReasonsEnum {
    BlockedReasonUnspecified = "BLOCKED_REASON_UNSPECIFIED",
    NoRevenueMetrics = "NO_REVENUE_METRICS",
    NoCostMetrics = "NO_COST_METRICS"
}

export enum MetricMetadataTypeEnum {
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


// MetricMetadata
/** 
 * Explains a metric.
**/
export class MetricMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiName" })
  apiName?: string;

  @SpeakeasyMetadata({ data: "json, name=blockedReasons" })
  blockedReasons?: MetricMetadataBlockedReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=customDefinition" })
  customDefinition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deprecatedApiNames" })
  deprecatedApiNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MetricMetadataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uiName" })
  uiName?: string;
}
