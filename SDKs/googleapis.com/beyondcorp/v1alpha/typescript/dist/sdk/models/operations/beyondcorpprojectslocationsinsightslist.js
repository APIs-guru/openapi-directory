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
var BeyondcorpProjectsLocationsInsightsListPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsListPathParams, _super);
    function BeyondcorpProjectsLocationsInsightsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListPathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsInsightsListPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsListPathParams };
export var BeyondcorpProjectsLocationsInsightsListViewEnum;
(function (BeyondcorpProjectsLocationsInsightsListViewEnum) {
    BeyondcorpProjectsLocationsInsightsListViewEnum["InsightViewUnspecified"] = "INSIGHT_VIEW_UNSPECIFIED";
    BeyondcorpProjectsLocationsInsightsListViewEnum["Basic"] = "BASIC";
    BeyondcorpProjectsLocationsInsightsListViewEnum["Full"] = "FULL";
})(BeyondcorpProjectsLocationsInsightsListViewEnum || (BeyondcorpProjectsLocationsInsightsListViewEnum = {}));
var BeyondcorpProjectsLocationsInsightsListQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsListQueryParams, _super);
    function BeyondcorpProjectsLocationsInsightsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListQueryParams.prototype, "view", void 0);
    return BeyondcorpProjectsLocationsInsightsListQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsListQueryParams };
var BeyondcorpProjectsLocationsInsightsListSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsListSecurity, _super);
    function BeyondcorpProjectsLocationsInsightsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsInsightsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsInsightsListSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsInsightsListSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsListSecurity };
var BeyondcorpProjectsLocationsInsightsListRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsListRequest, _super);
    function BeyondcorpProjectsLocationsInsightsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsListPathParams)
    ], BeyondcorpProjectsLocationsInsightsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsListQueryParams)
    ], BeyondcorpProjectsLocationsInsightsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsInsightsListSecurity)
    ], BeyondcorpProjectsLocationsInsightsListRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsInsightsListRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsListRequest };
var BeyondcorpProjectsLocationsInsightsListResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsInsightsListResponse, _super);
    function BeyondcorpProjectsLocationsInsightsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsInsightsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse)
    ], BeyondcorpProjectsLocationsInsightsListResponse.prototype, "googleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsInsightsListResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsInsightsListResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsInsightsListResponse };
