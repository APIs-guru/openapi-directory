import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediationReportSpecSortConditionDimensionEnum {
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
export declare enum MediationReportSpecSortConditionMetricEnum {
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
export declare enum MediationReportSpecSortConditionOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Sorting direction to be applied on a dimension or a metric.
**/
export declare class MediationReportSpecSortCondition extends SpeakeasyBase {
    dimension?: MediationReportSpecSortConditionDimensionEnum;
    metric?: MediationReportSpecSortConditionMetricEnum;
    order?: MediationReportSpecSortConditionOrderEnum;
}
