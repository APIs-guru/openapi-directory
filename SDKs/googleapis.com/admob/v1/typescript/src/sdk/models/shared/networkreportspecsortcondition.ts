import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkReportSpecSortConditionDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Date = "DATE"
,    Month = "MONTH"
,    Week = "WEEK"
,    AdUnit = "AD_UNIT"
,    App = "APP"
,    AdType = "AD_TYPE"
,    Country = "COUNTRY"
,    Format = "FORMAT"
,    Platform = "PLATFORM"
,    MobileOsVersion = "MOBILE_OS_VERSION"
,    GmaSdkVersion = "GMA_SDK_VERSION"
,    AppVersionName = "APP_VERSION_NAME"
,    ServingRestriction = "SERVING_RESTRICTION"
}

export enum NetworkReportSpecSortConditionMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED"
,    AdRequests = "AD_REQUESTS"
,    Clicks = "CLICKS"
,    EstimatedEarnings = "ESTIMATED_EARNINGS"
,    Impressions = "IMPRESSIONS"
,    ImpressionCtr = "IMPRESSION_CTR"
,    ImpressionRpm = "IMPRESSION_RPM"
,    MatchedRequests = "MATCHED_REQUESTS"
,    MatchRate = "MATCH_RATE"
,    ShowRate = "SHOW_RATE"
}

export enum NetworkReportSpecSortConditionOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// NetworkReportSpecSortCondition
/** 
 * Sorting direction to be applied on a dimension or a metric.
**/
export class NetworkReportSpecSortCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: NetworkReportSpecSortConditionDimensionEnum;

  @Metadata({ data: "json, name=metric" })
  metric?: NetworkReportSpecSortConditionMetricEnum;

  @Metadata({ data: "json, name=order" })
  order?: NetworkReportSpecSortConditionOrderEnum;
}
