var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var AdsenseAccountsReportsGeneratePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGeneratePathParams, _super);
    function AdsenseAccountsReportsGeneratePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGeneratePathParams.prototype, "account", void 0);
    return AdsenseAccountsReportsGeneratePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGeneratePathParams };
export var AdsenseAccountsReportsGenerateDateRangeEnum;
(function (AdsenseAccountsReportsGenerateDateRangeEnum) {
    AdsenseAccountsReportsGenerateDateRangeEnum["ReportingDateRangeUnspecified"] = "REPORTING_DATE_RANGE_UNSPECIFIED";
    AdsenseAccountsReportsGenerateDateRangeEnum["Custom"] = "CUSTOM";
    AdsenseAccountsReportsGenerateDateRangeEnum["Today"] = "TODAY";
    AdsenseAccountsReportsGenerateDateRangeEnum["Yesterday"] = "YESTERDAY";
    AdsenseAccountsReportsGenerateDateRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    AdsenseAccountsReportsGenerateDateRangeEnum["YearToDate"] = "YEAR_TO_DATE";
    AdsenseAccountsReportsGenerateDateRangeEnum["Last7Days"] = "LAST_7_DAYS";
    AdsenseAccountsReportsGenerateDateRangeEnum["Last30Days"] = "LAST_30_DAYS";
})(AdsenseAccountsReportsGenerateDateRangeEnum || (AdsenseAccountsReportsGenerateDateRangeEnum = {}));
export var AdsenseAccountsReportsGenerateDimensionsEnum;
(function (AdsenseAccountsReportsGenerateDimensionsEnum) {
    AdsenseAccountsReportsGenerateDimensionsEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    AdsenseAccountsReportsGenerateDimensionsEnum["Date"] = "DATE";
    AdsenseAccountsReportsGenerateDimensionsEnum["Week"] = "WEEK";
    AdsenseAccountsReportsGenerateDimensionsEnum["Month"] = "MONTH";
    AdsenseAccountsReportsGenerateDimensionsEnum["AccountName"] = "ACCOUNT_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdClientId"] = "AD_CLIENT_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["HostedAdClientId"] = "HOSTED_AD_CLIENT_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["ProductName"] = "PRODUCT_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["ProductCode"] = "PRODUCT_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdUnitName"] = "AD_UNIT_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdUnitId"] = "AD_UNIT_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdUnitSizeName"] = "AD_UNIT_SIZE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdUnitSizeCode"] = "AD_UNIT_SIZE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["CustomChannelName"] = "CUSTOM_CHANNEL_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["CustomChannelId"] = "CUSTOM_CHANNEL_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["OwnedSiteDomainName"] = "OWNED_SITE_DOMAIN_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["OwnedSiteId"] = "OWNED_SITE_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["UrlChannelName"] = "URL_CHANNEL_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["UrlChannelId"] = "URL_CHANNEL_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["BuyerNetworkName"] = "BUYER_NETWORK_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["BuyerNetworkId"] = "BUYER_NETWORK_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["BidTypeName"] = "BID_TYPE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["BidTypeCode"] = "BID_TYPE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["CreativeSizeName"] = "CREATIVE_SIZE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["CreativeSizeCode"] = "CREATIVE_SIZE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["DomainName"] = "DOMAIN_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["DomainCode"] = "DOMAIN_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["CountryName"] = "COUNTRY_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["CountryCode"] = "COUNTRY_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["PlatformTypeName"] = "PLATFORM_TYPE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["PlatformTypeCode"] = "PLATFORM_TYPE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["TargetingTypeName"] = "TARGETING_TYPE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["TargetingTypeCode"] = "TARGETING_TYPE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["ContentPlatformName"] = "CONTENT_PLATFORM_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["ContentPlatformCode"] = "CONTENT_PLATFORM_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdPlacementName"] = "AD_PLACEMENT_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdPlacementCode"] = "AD_PLACEMENT_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["RequestedAdTypeName"] = "REQUESTED_AD_TYPE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["RequestedAdTypeCode"] = "REQUESTED_AD_TYPE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["ServedAdTypeName"] = "SERVED_AD_TYPE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["ServedAdTypeCode"] = "SERVED_AD_TYPE_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdFormatName"] = "AD_FORMAT_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["AdFormatCode"] = "AD_FORMAT_CODE";
    AdsenseAccountsReportsGenerateDimensionsEnum["CustomSearchStyleName"] = "CUSTOM_SEARCH_STYLE_NAME";
    AdsenseAccountsReportsGenerateDimensionsEnum["CustomSearchStyleId"] = "CUSTOM_SEARCH_STYLE_ID";
    AdsenseAccountsReportsGenerateDimensionsEnum["DomainRegistrant"] = "DOMAIN_REGISTRANT";
    AdsenseAccountsReportsGenerateDimensionsEnum["WebsearchQueryString"] = "WEBSEARCH_QUERY_STRING";
})(AdsenseAccountsReportsGenerateDimensionsEnum || (AdsenseAccountsReportsGenerateDimensionsEnum = {}));
export var AdsenseAccountsReportsGenerateMetricsEnum;
(function (AdsenseAccountsReportsGenerateMetricsEnum) {
    AdsenseAccountsReportsGenerateMetricsEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    AdsenseAccountsReportsGenerateMetricsEnum["PageViews"] = "PAGE_VIEWS";
    AdsenseAccountsReportsGenerateMetricsEnum["AdRequests"] = "AD_REQUESTS";
    AdsenseAccountsReportsGenerateMetricsEnum["MatchedAdRequests"] = "MATCHED_AD_REQUESTS";
    AdsenseAccountsReportsGenerateMetricsEnum["TotalImpressions"] = "TOTAL_IMPRESSIONS";
    AdsenseAccountsReportsGenerateMetricsEnum["Impressions"] = "IMPRESSIONS";
    AdsenseAccountsReportsGenerateMetricsEnum["IndividualAdImpressions"] = "INDIVIDUAL_AD_IMPRESSIONS";
    AdsenseAccountsReportsGenerateMetricsEnum["Clicks"] = "CLICKS";
    AdsenseAccountsReportsGenerateMetricsEnum["PageViewsSpamRatio"] = "PAGE_VIEWS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["AdRequestsSpamRatio"] = "AD_REQUESTS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["MatchedAdRequestsSpamRatio"] = "MATCHED_AD_REQUESTS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["ImpressionsSpamRatio"] = "IMPRESSIONS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["IndividualAdImpressionsSpamRatio"] = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["ClicksSpamRatio"] = "CLICKS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateMetricsEnum["AdRequestsCoverage"] = "AD_REQUESTS_COVERAGE";
    AdsenseAccountsReportsGenerateMetricsEnum["PageViewsCtr"] = "PAGE_VIEWS_CTR";
    AdsenseAccountsReportsGenerateMetricsEnum["AdRequestsCtr"] = "AD_REQUESTS_CTR";
    AdsenseAccountsReportsGenerateMetricsEnum["MatchedAdRequestsCtr"] = "MATCHED_AD_REQUESTS_CTR";
    AdsenseAccountsReportsGenerateMetricsEnum["ImpressionsCtr"] = "IMPRESSIONS_CTR";
    AdsenseAccountsReportsGenerateMetricsEnum["IndividualAdImpressionsCtr"] = "INDIVIDUAL_AD_IMPRESSIONS_CTR";
    AdsenseAccountsReportsGenerateMetricsEnum["ActiveViewMeasurability"] = "ACTIVE_VIEW_MEASURABILITY";
    AdsenseAccountsReportsGenerateMetricsEnum["ActiveViewViewability"] = "ACTIVE_VIEW_VIEWABILITY";
    AdsenseAccountsReportsGenerateMetricsEnum["ActiveViewTime"] = "ACTIVE_VIEW_TIME";
    AdsenseAccountsReportsGenerateMetricsEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    AdsenseAccountsReportsGenerateMetricsEnum["PageViewsRpm"] = "PAGE_VIEWS_RPM";
    AdsenseAccountsReportsGenerateMetricsEnum["AdRequestsRpm"] = "AD_REQUESTS_RPM";
    AdsenseAccountsReportsGenerateMetricsEnum["MatchedAdRequestsRpm"] = "MATCHED_AD_REQUESTS_RPM";
    AdsenseAccountsReportsGenerateMetricsEnum["ImpressionsRpm"] = "IMPRESSIONS_RPM";
    AdsenseAccountsReportsGenerateMetricsEnum["IndividualAdImpressionsRpm"] = "INDIVIDUAL_AD_IMPRESSIONS_RPM";
    AdsenseAccountsReportsGenerateMetricsEnum["CostPerClick"] = "COST_PER_CLICK";
    AdsenseAccountsReportsGenerateMetricsEnum["AdsPerImpression"] = "ADS_PER_IMPRESSION";
    AdsenseAccountsReportsGenerateMetricsEnum["TotalEarnings"] = "TOTAL_EARNINGS";
    AdsenseAccountsReportsGenerateMetricsEnum["WebsearchResultPages"] = "WEBSEARCH_RESULT_PAGES";
})(AdsenseAccountsReportsGenerateMetricsEnum || (AdsenseAccountsReportsGenerateMetricsEnum = {}));
export var AdsenseAccountsReportsGenerateReportingTimeZoneEnum;
(function (AdsenseAccountsReportsGenerateReportingTimeZoneEnum) {
    AdsenseAccountsReportsGenerateReportingTimeZoneEnum["ReportingTimeZoneUnspecified"] = "REPORTING_TIME_ZONE_UNSPECIFIED";
    AdsenseAccountsReportsGenerateReportingTimeZoneEnum["AccountTimeZone"] = "ACCOUNT_TIME_ZONE";
    AdsenseAccountsReportsGenerateReportingTimeZoneEnum["GoogleTimeZone"] = "GOOGLE_TIME_ZONE";
})(AdsenseAccountsReportsGenerateReportingTimeZoneEnum || (AdsenseAccountsReportsGenerateReportingTimeZoneEnum = {}));
var AdsenseAccountsReportsGenerateQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateQueryParams, _super);
    function AdsenseAccountsReportsGenerateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportingTimeZone" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "reportingTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsReportsGenerateQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateQueryParams };
var AdsenseAccountsReportsGenerateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurityOption1, _super);
    function AdsenseAccountsReportsGenerateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurityOption1 };
var AdsenseAccountsReportsGenerateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurityOption2, _super);
    function AdsenseAccountsReportsGenerateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurityOption2 };
var AdsenseAccountsReportsGenerateSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateSecurity, _super);
    function AdsenseAccountsReportsGenerateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurityOption1)
    ], AdsenseAccountsReportsGenerateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurityOption2)
    ], AdsenseAccountsReportsGenerateSecurity.prototype, "option2", void 0);
    return AdsenseAccountsReportsGenerateSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateSecurity };
var AdsenseAccountsReportsGenerateRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateRequest, _super);
    function AdsenseAccountsReportsGenerateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGeneratePathParams)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateQueryParams)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateSecurity)
    ], AdsenseAccountsReportsGenerateRequest.prototype, "security", void 0);
    return AdsenseAccountsReportsGenerateRequest;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateRequest };
var AdsenseAccountsReportsGenerateResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateResponse, _super);
    function AdsenseAccountsReportsGenerateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportResult)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "reportResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsReportsGenerateResponse;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateResponse };
