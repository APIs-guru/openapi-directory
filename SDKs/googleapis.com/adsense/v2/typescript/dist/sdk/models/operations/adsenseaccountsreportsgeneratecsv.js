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
var AdsenseAccountsReportsGenerateCsvPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvPathParams, _super);
    function AdsenseAccountsReportsGenerateCsvPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvPathParams.prototype, "account", void 0);
    return AdsenseAccountsReportsGenerateCsvPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvPathParams };
export var AdsenseAccountsReportsGenerateCsvDateRangeEnum;
(function (AdsenseAccountsReportsGenerateCsvDateRangeEnum) {
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["ReportingDateRangeUnspecified"] = "REPORTING_DATE_RANGE_UNSPECIFIED";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["Custom"] = "CUSTOM";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["Today"] = "TODAY";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["Yesterday"] = "YESTERDAY";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["YearToDate"] = "YEAR_TO_DATE";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["Last7Days"] = "LAST_7_DAYS";
    AdsenseAccountsReportsGenerateCsvDateRangeEnum["Last30Days"] = "LAST_30_DAYS";
})(AdsenseAccountsReportsGenerateCsvDateRangeEnum || (AdsenseAccountsReportsGenerateCsvDateRangeEnum = {}));
export var AdsenseAccountsReportsGenerateCsvDimensionsEnum;
(function (AdsenseAccountsReportsGenerateCsvDimensionsEnum) {
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["Date"] = "DATE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["Week"] = "WEEK";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["Month"] = "MONTH";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AccountName"] = "ACCOUNT_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdClientId"] = "AD_CLIENT_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["HostedAdClientId"] = "HOSTED_AD_CLIENT_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ProductName"] = "PRODUCT_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ProductCode"] = "PRODUCT_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdUnitName"] = "AD_UNIT_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdUnitId"] = "AD_UNIT_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdUnitSizeName"] = "AD_UNIT_SIZE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdUnitSizeCode"] = "AD_UNIT_SIZE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CustomChannelName"] = "CUSTOM_CHANNEL_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CustomChannelId"] = "CUSTOM_CHANNEL_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["OwnedSiteDomainName"] = "OWNED_SITE_DOMAIN_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["OwnedSiteId"] = "OWNED_SITE_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["UrlChannelName"] = "URL_CHANNEL_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["UrlChannelId"] = "URL_CHANNEL_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["BuyerNetworkName"] = "BUYER_NETWORK_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["BuyerNetworkId"] = "BUYER_NETWORK_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["BidTypeName"] = "BID_TYPE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["BidTypeCode"] = "BID_TYPE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CreativeSizeName"] = "CREATIVE_SIZE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CreativeSizeCode"] = "CREATIVE_SIZE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["DomainName"] = "DOMAIN_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["DomainCode"] = "DOMAIN_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CountryName"] = "COUNTRY_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CountryCode"] = "COUNTRY_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["PlatformTypeName"] = "PLATFORM_TYPE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["PlatformTypeCode"] = "PLATFORM_TYPE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["TargetingTypeName"] = "TARGETING_TYPE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["TargetingTypeCode"] = "TARGETING_TYPE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ContentPlatformName"] = "CONTENT_PLATFORM_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ContentPlatformCode"] = "CONTENT_PLATFORM_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdPlacementName"] = "AD_PLACEMENT_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdPlacementCode"] = "AD_PLACEMENT_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["RequestedAdTypeName"] = "REQUESTED_AD_TYPE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["RequestedAdTypeCode"] = "REQUESTED_AD_TYPE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ServedAdTypeName"] = "SERVED_AD_TYPE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["ServedAdTypeCode"] = "SERVED_AD_TYPE_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdFormatName"] = "AD_FORMAT_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["AdFormatCode"] = "AD_FORMAT_CODE";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CustomSearchStyleName"] = "CUSTOM_SEARCH_STYLE_NAME";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["CustomSearchStyleId"] = "CUSTOM_SEARCH_STYLE_ID";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["DomainRegistrant"] = "DOMAIN_REGISTRANT";
    AdsenseAccountsReportsGenerateCsvDimensionsEnum["WebsearchQueryString"] = "WEBSEARCH_QUERY_STRING";
})(AdsenseAccountsReportsGenerateCsvDimensionsEnum || (AdsenseAccountsReportsGenerateCsvDimensionsEnum = {}));
export var AdsenseAccountsReportsGenerateCsvMetricsEnum;
(function (AdsenseAccountsReportsGenerateCsvMetricsEnum) {
    AdsenseAccountsReportsGenerateCsvMetricsEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["PageViews"] = "PAGE_VIEWS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdRequests"] = "AD_REQUESTS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["MatchedAdRequests"] = "MATCHED_AD_REQUESTS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["TotalImpressions"] = "TOTAL_IMPRESSIONS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["Impressions"] = "IMPRESSIONS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["IndividualAdImpressions"] = "INDIVIDUAL_AD_IMPRESSIONS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["Clicks"] = "CLICKS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["PageViewsSpamRatio"] = "PAGE_VIEWS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdRequestsSpamRatio"] = "AD_REQUESTS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["MatchedAdRequestsSpamRatio"] = "MATCHED_AD_REQUESTS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ImpressionsSpamRatio"] = "IMPRESSIONS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["IndividualAdImpressionsSpamRatio"] = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ClicksSpamRatio"] = "CLICKS_SPAM_RATIO";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdRequestsCoverage"] = "AD_REQUESTS_COVERAGE";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["PageViewsCtr"] = "PAGE_VIEWS_CTR";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdRequestsCtr"] = "AD_REQUESTS_CTR";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["MatchedAdRequestsCtr"] = "MATCHED_AD_REQUESTS_CTR";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ImpressionsCtr"] = "IMPRESSIONS_CTR";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["IndividualAdImpressionsCtr"] = "INDIVIDUAL_AD_IMPRESSIONS_CTR";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ActiveViewMeasurability"] = "ACTIVE_VIEW_MEASURABILITY";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ActiveViewViewability"] = "ACTIVE_VIEW_VIEWABILITY";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ActiveViewTime"] = "ACTIVE_VIEW_TIME";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["PageViewsRpm"] = "PAGE_VIEWS_RPM";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdRequestsRpm"] = "AD_REQUESTS_RPM";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["MatchedAdRequestsRpm"] = "MATCHED_AD_REQUESTS_RPM";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["ImpressionsRpm"] = "IMPRESSIONS_RPM";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["IndividualAdImpressionsRpm"] = "INDIVIDUAL_AD_IMPRESSIONS_RPM";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["CostPerClick"] = "COST_PER_CLICK";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["AdsPerImpression"] = "ADS_PER_IMPRESSION";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["TotalEarnings"] = "TOTAL_EARNINGS";
    AdsenseAccountsReportsGenerateCsvMetricsEnum["WebsearchResultPages"] = "WEBSEARCH_RESULT_PAGES";
})(AdsenseAccountsReportsGenerateCsvMetricsEnum || (AdsenseAccountsReportsGenerateCsvMetricsEnum = {}));
export var AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum;
(function (AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum) {
    AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum["ReportingTimeZoneUnspecified"] = "REPORTING_TIME_ZONE_UNSPECIFIED";
    AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum["AccountTimeZone"] = "ACCOUNT_TIME_ZONE";
    AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum["GoogleTimeZone"] = "GOOGLE_TIME_ZONE";
})(AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum || (AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum = {}));
var AdsenseAccountsReportsGenerateCsvQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvQueryParams, _super);
    function AdsenseAccountsReportsGenerateCsvQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRange" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", Array)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportingTimeZone" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "reportingTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsReportsGenerateCsvQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvQueryParams };
var AdsenseAccountsReportsGenerateCsvSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvSecurityOption1, _super);
    function AdsenseAccountsReportsGenerateCsvSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateCsvSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateCsvSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateCsvSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvSecurityOption1 };
var AdsenseAccountsReportsGenerateCsvSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvSecurityOption2, _super);
    function AdsenseAccountsReportsGenerateCsvSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGenerateCsvSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGenerateCsvSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGenerateCsvSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvSecurityOption2 };
var AdsenseAccountsReportsGenerateCsvSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvSecurity, _super);
    function AdsenseAccountsReportsGenerateCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateCsvSecurityOption1)
    ], AdsenseAccountsReportsGenerateCsvSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGenerateCsvSecurityOption2)
    ], AdsenseAccountsReportsGenerateCsvSecurity.prototype, "option2", void 0);
    return AdsenseAccountsReportsGenerateCsvSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvSecurity };
var AdsenseAccountsReportsGenerateCsvRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvRequest, _super);
    function AdsenseAccountsReportsGenerateCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateCsvPathParams)
    ], AdsenseAccountsReportsGenerateCsvRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateCsvQueryParams)
    ], AdsenseAccountsReportsGenerateCsvRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGenerateCsvSecurity)
    ], AdsenseAccountsReportsGenerateCsvRequest.prototype, "security", void 0);
    return AdsenseAccountsReportsGenerateCsvRequest;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvRequest };
var AdsenseAccountsReportsGenerateCsvResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGenerateCsvResponse, _super);
    function AdsenseAccountsReportsGenerateCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGenerateCsvResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], AdsenseAccountsReportsGenerateCsvResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGenerateCsvResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsReportsGenerateCsvResponse;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGenerateCsvResponse };
