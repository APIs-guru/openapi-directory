import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { MediationReportSpecDimensionFilter } from "./mediationreportspecdimensionfilter";
import { LocalizationSettings } from "./localizationsettings";
import { MediationReportSpecSortCondition } from "./mediationreportspecsortcondition";
export declare enum MediationReportSpecDimensionsEnum {
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
export declare enum MediationReportSpecMetricsEnum {
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
/**
 * The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
**/
export declare class MediationReportSpec extends SpeakeasyBase {
    dateRange?: DateRange;
    dimensionFilters?: MediationReportSpecDimensionFilter[];
    dimensions?: MediationReportSpecDimensionsEnum[];
    localizationSettings?: LocalizationSettings;
    maxReportRows?: number;
    metrics?: MediationReportSpecMetricsEnum[];
    sortConditions?: MediationReportSpecSortCondition[];
    timeZone?: string;
}
