import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetricMetadataBlockedReasonsEnum {
    BlockedReasonUnspecified = "BLOCKED_REASON_UNSPECIFIED"
,    NoRevenueMetrics = "NO_REVENUE_METRICS"
,    NoCostMetrics = "NO_COST_METRICS"
}

export enum MetricMetadataTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    TypeInteger = "TYPE_INTEGER"
,    TypeFloat = "TYPE_FLOAT"
,    TypeSeconds = "TYPE_SECONDS"
,    TypeMilliseconds = "TYPE_MILLISECONDS"
,    TypeMinutes = "TYPE_MINUTES"
,    TypeHours = "TYPE_HOURS"
,    TypeStandard = "TYPE_STANDARD"
,    TypeCurrency = "TYPE_CURRENCY"
,    TypeFeet = "TYPE_FEET"
,    TypeMiles = "TYPE_MILES"
,    TypeMeters = "TYPE_METERS"
,    TypeKilometers = "TYPE_KILOMETERS"
}


// MetricMetadata
/** 
 * Explains a metric.
**/
export class MetricMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiName" })
  apiName?: string;

  @Metadata({ data: "json, name=blockedReasons" })
  blockedReasons?: MetricMetadataBlockedReasonsEnum[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=customDefinition" })
  customDefinition?: boolean;

  @Metadata({ data: "json, name=deprecatedApiNames" })
  deprecatedApiNames?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=type" })
  type?: MetricMetadataTypeEnum;

  @Metadata({ data: "json, name=uiName" })
  uiName?: string;
}
