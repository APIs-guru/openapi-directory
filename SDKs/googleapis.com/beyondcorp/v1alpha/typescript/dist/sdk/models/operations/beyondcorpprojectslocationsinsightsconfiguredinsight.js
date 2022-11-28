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
var BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams, _super);
    function BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insight" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams.prototype, "insight", void 0);
    return BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams };
export var BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum;
(function (BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum) {
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["AggregationUnspecified"] = "AGGREGATION_UNSPECIFIED";
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["Hourly"] = "HOURLY";
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["Daily"] = "DAILY";
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["Weekly"] = "WEEKLY";
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["Monthly"] = "MONTHLY";
    BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum["CustomDateRange"] = "CUSTOM_DATE_RANGE";
})(BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum || (BeyondcorpProjectsLocationsInsightsConfiguredInsightAggregationEnum = {}));
var BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams, _super);
    function BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregation" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "aggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customGrouping.fieldFilter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "customGroupingFieldFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customGrouping.groupFields" }),
        __metadata("design:type", Array)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "customGroupingGroupFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldFilter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "fieldFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams };
var BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity, _super);
    function BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity };
var BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest, _super);
    function BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsConfiguredInsightPathParams)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsConfiguredInsightQueryParams)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsConfiguredInsightSecurity)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsConfiguredInsightRequest };
var BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse, _super);
    function BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse.prototype, "googleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsConfiguredInsightResponse };
