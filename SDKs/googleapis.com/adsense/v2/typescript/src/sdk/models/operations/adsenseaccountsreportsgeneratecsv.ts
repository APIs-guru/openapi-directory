import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsReportsGenerateCsvPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}

export enum AdsenseAccountsReportsGenerateCsvDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED"
,    Custom = "CUSTOM"
,    Today = "TODAY"
,    Yesterday = "YESTERDAY"
,    MonthToDate = "MONTH_TO_DATE"
,    YearToDate = "YEAR_TO_DATE"
,    Last7Days = "LAST_7_DAYS"
,    Last30Days = "LAST_30_DAYS"
}

export enum AdsenseAccountsReportsGenerateCsvDimensionsEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED"
,    Date = "DATE"
,    Week = "WEEK"
,    Month = "MONTH"
,    AccountName = "ACCOUNT_NAME"
,    AdClientId = "AD_CLIENT_ID"
,    HostedAdClientId = "HOSTED_AD_CLIENT_ID"
,    ProductName = "PRODUCT_NAME"
,    ProductCode = "PRODUCT_CODE"
,    AdUnitName = "AD_UNIT_NAME"
,    AdUnitId = "AD_UNIT_ID"
,    AdUnitSizeName = "AD_UNIT_SIZE_NAME"
,    AdUnitSizeCode = "AD_UNIT_SIZE_CODE"
,    CustomChannelName = "CUSTOM_CHANNEL_NAME"
,    CustomChannelId = "CUSTOM_CHANNEL_ID"
,    OwnedSiteDomainName = "OWNED_SITE_DOMAIN_NAME"
,    OwnedSiteId = "OWNED_SITE_ID"
,    UrlChannelName = "URL_CHANNEL_NAME"
,    UrlChannelId = "URL_CHANNEL_ID"
,    BuyerNetworkName = "BUYER_NETWORK_NAME"
,    BuyerNetworkId = "BUYER_NETWORK_ID"
,    BidTypeName = "BID_TYPE_NAME"
,    BidTypeCode = "BID_TYPE_CODE"
,    CreativeSizeName = "CREATIVE_SIZE_NAME"
,    CreativeSizeCode = "CREATIVE_SIZE_CODE"
,    DomainName = "DOMAIN_NAME"
,    DomainCode = "DOMAIN_CODE"
,    CountryName = "COUNTRY_NAME"
,    CountryCode = "COUNTRY_CODE"
,    PlatformTypeName = "PLATFORM_TYPE_NAME"
,    PlatformTypeCode = "PLATFORM_TYPE_CODE"
,    TargetingTypeName = "TARGETING_TYPE_NAME"
,    TargetingTypeCode = "TARGETING_TYPE_CODE"
,    ContentPlatformName = "CONTENT_PLATFORM_NAME"
,    ContentPlatformCode = "CONTENT_PLATFORM_CODE"
,    AdPlacementName = "AD_PLACEMENT_NAME"
,    AdPlacementCode = "AD_PLACEMENT_CODE"
,    RequestedAdTypeName = "REQUESTED_AD_TYPE_NAME"
,    RequestedAdTypeCode = "REQUESTED_AD_TYPE_CODE"
,    ServedAdTypeName = "SERVED_AD_TYPE_NAME"
,    ServedAdTypeCode = "SERVED_AD_TYPE_CODE"
,    AdFormatName = "AD_FORMAT_NAME"
,    AdFormatCode = "AD_FORMAT_CODE"
,    CustomSearchStyleName = "CUSTOM_SEARCH_STYLE_NAME"
,    CustomSearchStyleId = "CUSTOM_SEARCH_STYLE_ID"
,    DomainRegistrant = "DOMAIN_REGISTRANT"
,    WebsearchQueryString = "WEBSEARCH_QUERY_STRING"
}

export enum AdsenseAccountsReportsGenerateCsvMetricsEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED"
,    PageViews = "PAGE_VIEWS"
,    AdRequests = "AD_REQUESTS"
,    MatchedAdRequests = "MATCHED_AD_REQUESTS"
,    TotalImpressions = "TOTAL_IMPRESSIONS"
,    Impressions = "IMPRESSIONS"
,    IndividualAdImpressions = "INDIVIDUAL_AD_IMPRESSIONS"
,    Clicks = "CLICKS"
,    PageViewsSpamRatio = "PAGE_VIEWS_SPAM_RATIO"
,    AdRequestsSpamRatio = "AD_REQUESTS_SPAM_RATIO"
,    MatchedAdRequestsSpamRatio = "MATCHED_AD_REQUESTS_SPAM_RATIO"
,    ImpressionsSpamRatio = "IMPRESSIONS_SPAM_RATIO"
,    IndividualAdImpressionsSpamRatio = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO"
,    ClicksSpamRatio = "CLICKS_SPAM_RATIO"
,    AdRequestsCoverage = "AD_REQUESTS_COVERAGE"
,    PageViewsCtr = "PAGE_VIEWS_CTR"
,    AdRequestsCtr = "AD_REQUESTS_CTR"
,    MatchedAdRequestsCtr = "MATCHED_AD_REQUESTS_CTR"
,    ImpressionsCtr = "IMPRESSIONS_CTR"
,    IndividualAdImpressionsCtr = "INDIVIDUAL_AD_IMPRESSIONS_CTR"
,    ActiveViewMeasurability = "ACTIVE_VIEW_MEASURABILITY"
,    ActiveViewViewability = "ACTIVE_VIEW_VIEWABILITY"
,    ActiveViewTime = "ACTIVE_VIEW_TIME"
,    EstimatedEarnings = "ESTIMATED_EARNINGS"
,    PageViewsRpm = "PAGE_VIEWS_RPM"
,    AdRequestsRpm = "AD_REQUESTS_RPM"
,    MatchedAdRequestsRpm = "MATCHED_AD_REQUESTS_RPM"
,    ImpressionsRpm = "IMPRESSIONS_RPM"
,    IndividualAdImpressionsRpm = "INDIVIDUAL_AD_IMPRESSIONS_RPM"
,    CostPerClick = "COST_PER_CLICK"
,    AdsPerImpression = "ADS_PER_IMPRESSION"
,    TotalEarnings = "TOTAL_EARNINGS"
,    WebsearchResultPages = "WEBSEARCH_RESULT_PAGES"
}

export enum AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED"
,    AccountTimeZone = "ACCOUNT_TIME_ZONE"
,    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}


export class AdsenseAccountsReportsGenerateCsvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateRange" })
  dateRange?: AdsenseAccountsReportsGenerateCsvDateRangeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dimensions" })
  dimensions?: AdsenseAccountsReportsGenerateCsvDimensionsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.day" })
  endDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.month" })
  endDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.year" })
  endDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: AdsenseAccountsReportsGenerateCsvMetricsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportingTimeZone" })
  reportingTimeZone?: AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.day" })
  startDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.month" })
  startDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.year" })
  startDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AdsenseAccountsReportsGenerateCsvSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsGenerateCsvSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsReportsGenerateCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsReportsGenerateCsvSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsReportsGenerateCsvSecurityOption2;
}


export class AdsenseAccountsReportsGenerateCsvRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsReportsGenerateCsvPathParams;

  @Metadata()
  queryParams: AdsenseAccountsReportsGenerateCsvQueryParams;

  @Metadata()
  security: AdsenseAccountsReportsGenerateCsvSecurity;
}


export class AdsenseAccountsReportsGenerateCsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
