import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsGenerateCsvPathParams extends SpeakeasyBase {
    account: string;
}
export declare enum AdsenseAccountsReportsGenerateCsvDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}
export declare enum AdsenseAccountsReportsGenerateCsvDimensionsEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Week = "WEEK",
    Month = "MONTH",
    AccountName = "ACCOUNT_NAME",
    AdClientId = "AD_CLIENT_ID",
    HostedAdClientId = "HOSTED_AD_CLIENT_ID",
    ProductName = "PRODUCT_NAME",
    ProductCode = "PRODUCT_CODE",
    AdUnitName = "AD_UNIT_NAME",
    AdUnitId = "AD_UNIT_ID",
    AdUnitSizeName = "AD_UNIT_SIZE_NAME",
    AdUnitSizeCode = "AD_UNIT_SIZE_CODE",
    CustomChannelName = "CUSTOM_CHANNEL_NAME",
    CustomChannelId = "CUSTOM_CHANNEL_ID",
    OwnedSiteDomainName = "OWNED_SITE_DOMAIN_NAME",
    OwnedSiteId = "OWNED_SITE_ID",
    UrlChannelName = "URL_CHANNEL_NAME",
    UrlChannelId = "URL_CHANNEL_ID",
    BuyerNetworkName = "BUYER_NETWORK_NAME",
    BuyerNetworkId = "BUYER_NETWORK_ID",
    BidTypeName = "BID_TYPE_NAME",
    BidTypeCode = "BID_TYPE_CODE",
    CreativeSizeName = "CREATIVE_SIZE_NAME",
    CreativeSizeCode = "CREATIVE_SIZE_CODE",
    DomainName = "DOMAIN_NAME",
    DomainCode = "DOMAIN_CODE",
    CountryName = "COUNTRY_NAME",
    CountryCode = "COUNTRY_CODE",
    PlatformTypeName = "PLATFORM_TYPE_NAME",
    PlatformTypeCode = "PLATFORM_TYPE_CODE",
    TargetingTypeName = "TARGETING_TYPE_NAME",
    TargetingTypeCode = "TARGETING_TYPE_CODE",
    ContentPlatformName = "CONTENT_PLATFORM_NAME",
    ContentPlatformCode = "CONTENT_PLATFORM_CODE",
    AdPlacementName = "AD_PLACEMENT_NAME",
    AdPlacementCode = "AD_PLACEMENT_CODE",
    RequestedAdTypeName = "REQUESTED_AD_TYPE_NAME",
    RequestedAdTypeCode = "REQUESTED_AD_TYPE_CODE",
    ServedAdTypeName = "SERVED_AD_TYPE_NAME",
    ServedAdTypeCode = "SERVED_AD_TYPE_CODE",
    AdFormatName = "AD_FORMAT_NAME",
    AdFormatCode = "AD_FORMAT_CODE",
    CustomSearchStyleName = "CUSTOM_SEARCH_STYLE_NAME",
    CustomSearchStyleId = "CUSTOM_SEARCH_STYLE_ID",
    DomainRegistrant = "DOMAIN_REGISTRANT",
    WebsearchQueryString = "WEBSEARCH_QUERY_STRING"
}
export declare enum AdsenseAccountsReportsGenerateCsvMetricsEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    PageViews = "PAGE_VIEWS",
    AdRequests = "AD_REQUESTS",
    MatchedAdRequests = "MATCHED_AD_REQUESTS",
    TotalImpressions = "TOTAL_IMPRESSIONS",
    Impressions = "IMPRESSIONS",
    IndividualAdImpressions = "INDIVIDUAL_AD_IMPRESSIONS",
    Clicks = "CLICKS",
    PageViewsSpamRatio = "PAGE_VIEWS_SPAM_RATIO",
    AdRequestsSpamRatio = "AD_REQUESTS_SPAM_RATIO",
    MatchedAdRequestsSpamRatio = "MATCHED_AD_REQUESTS_SPAM_RATIO",
    ImpressionsSpamRatio = "IMPRESSIONS_SPAM_RATIO",
    IndividualAdImpressionsSpamRatio = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO",
    ClicksSpamRatio = "CLICKS_SPAM_RATIO",
    AdRequestsCoverage = "AD_REQUESTS_COVERAGE",
    PageViewsCtr = "PAGE_VIEWS_CTR",
    AdRequestsCtr = "AD_REQUESTS_CTR",
    MatchedAdRequestsCtr = "MATCHED_AD_REQUESTS_CTR",
    ImpressionsCtr = "IMPRESSIONS_CTR",
    IndividualAdImpressionsCtr = "INDIVIDUAL_AD_IMPRESSIONS_CTR",
    ActiveViewMeasurability = "ACTIVE_VIEW_MEASURABILITY",
    ActiveViewViewability = "ACTIVE_VIEW_VIEWABILITY",
    ActiveViewTime = "ACTIVE_VIEW_TIME",
    EstimatedEarnings = "ESTIMATED_EARNINGS",
    PageViewsRpm = "PAGE_VIEWS_RPM",
    AdRequestsRpm = "AD_REQUESTS_RPM",
    MatchedAdRequestsRpm = "MATCHED_AD_REQUESTS_RPM",
    ImpressionsRpm = "IMPRESSIONS_RPM",
    IndividualAdImpressionsRpm = "INDIVIDUAL_AD_IMPRESSIONS_RPM",
    CostPerClick = "COST_PER_CLICK",
    AdsPerImpression = "ADS_PER_IMPRESSION",
    TotalEarnings = "TOTAL_EARNINGS",
    WebsearchResultPages = "WEBSEARCH_RESULT_PAGES"
}
export declare enum AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}
export declare class AdsenseAccountsReportsGenerateCsvQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currencyCode?: string;
    dateRange?: AdsenseAccountsReportsGenerateCsvDateRangeEnum;
    dimensions?: AdsenseAccountsReportsGenerateCsvDimensionsEnum[];
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    filters?: string[];
    key?: string;
    languageCode?: string;
    limit?: number;
    metrics?: AdsenseAccountsReportsGenerateCsvMetricsEnum[];
    oauthToken?: string;
    orderBy?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    reportingTimeZone?: AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsReportsGenerateCsvSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGenerateCsvSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGenerateCsvSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsGenerateCsvSecurityOption1;
    option2?: AdsenseAccountsReportsGenerateCsvSecurityOption2;
}
export declare class AdsenseAccountsReportsGenerateCsvRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsGenerateCsvPathParams;
    queryParams: AdsenseAccountsReportsGenerateCsvQueryParams;
    security: AdsenseAccountsReportsGenerateCsvSecurity;
}
export declare class AdsenseAccountsReportsGenerateCsvResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
