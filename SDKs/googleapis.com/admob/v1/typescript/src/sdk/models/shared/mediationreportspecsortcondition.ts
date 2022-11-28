import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MediationReportSpecSortConditionDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Month = "MONTH",
    Week = "WEEK",
    AdSource = "AD_SOURCE",
    AdSourceInstance = "AD_SOURCE_INSTANCE",
    AdUnit = "AD_UNIT",
    App = "APP",
    MediationGroup = "MEDIATION_GROUP",
    Country = "COUNTRY",
    Format = "FORMAT",
    Platform = "PLATFORM",
    MobileOsVersion = "MOBILE_OS_VERSION",
    GmaSdkVersion = "GMA_SDK_VERSION",
    AppVersionName = "APP_VERSION_NAME",
    ServingRestriction = "SERVING_RESTRICTION"
}

export enum MediationReportSpecSortConditionMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    AdRequests = "AD_REQUESTS",
    Clicks = "CLICKS",
    EstimatedEarnings = "ESTIMATED_EARNINGS",
    Impressions = "IMPRESSIONS",
    ImpressionCtr = "IMPRESSION_CTR",
    MatchedRequests = "MATCHED_REQUESTS",
    MatchRate = "MATCH_RATE",
    ObservedEcpm = "OBSERVED_ECPM"
}

export enum MediationReportSpecSortConditionOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// MediationReportSpecSortCondition
/** 
 * Sorting direction to be applied on a dimension or a metric.
**/
export class MediationReportSpecSortCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: MediationReportSpecSortConditionDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: MediationReportSpecSortConditionMetricEnum;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: MediationReportSpecSortConditionOrderEnum;
}
