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
export var ReportsEntityUsageReportsGetEntityTypeEnum;
(function (ReportsEntityUsageReportsGetEntityTypeEnum) {
    ReportsEntityUsageReportsGetEntityTypeEnum["GplusCommunities"] = "gplus_communities";
})(ReportsEntityUsageReportsGetEntityTypeEnum || (ReportsEntityUsageReportsGetEntityTypeEnum = {}));
var ReportsEntityUsageReportsGetPathParams = /** @class */ (function (_super) {
    __extends(ReportsEntityUsageReportsGetPathParams, _super);
    function ReportsEntityUsageReportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityKey" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetPathParams.prototype, "entityKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetPathParams.prototype, "entityType", void 0);
    return ReportsEntityUsageReportsGetPathParams;
}(SpeakeasyBase));
export { ReportsEntityUsageReportsGetPathParams };
var ReportsEntityUsageReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(ReportsEntityUsageReportsGetQueryParams, _super);
    function ReportsEntityUsageReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ReportsEntityUsageReportsGetQueryParams;
}(SpeakeasyBase));
export { ReportsEntityUsageReportsGetQueryParams };
var ReportsEntityUsageReportsGetSecurity = /** @class */ (function (_super) {
    __extends(ReportsEntityUsageReportsGetSecurity, _super);
    function ReportsEntityUsageReportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReportsEntityUsageReportsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReportsEntityUsageReportsGetSecurity.prototype, "oauth2c", void 0);
    return ReportsEntityUsageReportsGetSecurity;
}(SpeakeasyBase));
export { ReportsEntityUsageReportsGetSecurity };
var ReportsEntityUsageReportsGetRequest = /** @class */ (function (_super) {
    __extends(ReportsEntityUsageReportsGetRequest, _super);
    function ReportsEntityUsageReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsEntityUsageReportsGetPathParams)
    ], ReportsEntityUsageReportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsEntityUsageReportsGetQueryParams)
    ], ReportsEntityUsageReportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsEntityUsageReportsGetSecurity)
    ], ReportsEntityUsageReportsGetRequest.prototype, "security", void 0);
    return ReportsEntityUsageReportsGetRequest;
}(SpeakeasyBase));
export { ReportsEntityUsageReportsGetRequest };
var ReportsEntityUsageReportsGetResponse = /** @class */ (function (_super) {
    __extends(ReportsEntityUsageReportsGetResponse, _super);
    function ReportsEntityUsageReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportsEntityUsageReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportsEntityUsageReportsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UsageReports)
    ], ReportsEntityUsageReportsGetResponse.prototype, "usageReports", void 0);
    return ReportsEntityUsageReportsGetResponse;
}(SpeakeasyBase));
export { ReportsEntityUsageReportsGetResponse };
