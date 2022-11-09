import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DateRange } from "./daterange";
import { NetworkReportSpecDimensionFilter } from "./networkreportspecdimensionfilter";
import { LocalizationSettings } from "./localizationsettings";
import { NetworkReportSpecSortCondition } from "./networkreportspecsortcondition";

export enum NetworkReportSpecDimensionsEnum {
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

export enum NetworkReportSpecMetricsEnum {
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


// NetworkReportSpec
/** 
 * The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
**/
export class NetworkReportSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.NetworkReportSpecDimensionFilter })
  dimensionFilters?: NetworkReportSpecDimensionFilter[];

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: NetworkReportSpecDimensionsEnum[];

  @Metadata({ data: "json, name=localizationSettings" })
  localizationSettings?: LocalizationSettings;

  @Metadata({ data: "json, name=maxReportRows" })
  maxReportRows?: number;

  @Metadata({ data: "json, name=metrics" })
  metrics?: NetworkReportSpecMetricsEnum[];

  @Metadata({ data: "json, name=sortConditions", elemType: shared.NetworkReportSpecSortCondition })
  sortConditions?: NetworkReportSpecSortCondition[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
