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
var ReportsUserUsageReportGetPathParams = /** @class */ (function (_super) {
    __extends(ReportsUserUsageReportGetPathParams, _super);
    function ReportsUserUsageReportGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetPathParams.prototype, "userKey", void 0);
    return ReportsUserUsageReportGetPathParams;
}(SpeakeasyBase));
export { ReportsUserUsageReportGetPathParams };
var ReportsUserUsageReportGetQueryParams = /** @class */ (function (_super) {
    __extends(ReportsUserUsageReportGetQueryParams, _super);
    function ReportsUserUsageReportGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupIdFilter" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "groupIdFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReportsUserUsageReportGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitID" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReportsUserUsageReportGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetQueryParams.prototype, "uploadProtocol", void 0);
    return ReportsUserUsageReportGetQueryParams;
}(SpeakeasyBase));
export { ReportsUserUsageReportGetQueryParams };
var ReportsUserUsageReportGetSecurity = /** @class */ (function (_super) {
    __extends(ReportsUserUsageReportGetSecurity, _super);
    function ReportsUserUsageReportGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReportsUserUsageReportGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReportsUserUsageReportGetSecurity.prototype, "oauth2c", void 0);
    return ReportsUserUsageReportGetSecurity;
}(SpeakeasyBase));
export { ReportsUserUsageReportGetSecurity };
var ReportsUserUsageReportGetRequest = /** @class */ (function (_super) {
    __extends(ReportsUserUsageReportGetRequest, _super);
    function ReportsUserUsageReportGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsUserUsageReportGetPathParams)
    ], ReportsUserUsageReportGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsUserUsageReportGetQueryParams)
    ], ReportsUserUsageReportGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsUserUsageReportGetSecurity)
    ], ReportsUserUsageReportGetRequest.prototype, "security", void 0);
    return ReportsUserUsageReportGetRequest;
}(SpeakeasyBase));
export { ReportsUserUsageReportGetRequest };
var ReportsUserUsageReportGetResponse = /** @class */ (function (_super) {
    __extends(ReportsUserUsageReportGetResponse, _super);
    function ReportsUserUsageReportGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportsUserUsageReportGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportsUserUsageReportGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UsageReports)
    ], ReportsUserUsageReportGetResponse.prototype, "usageReports", void 0);
    return ReportsUserUsageReportGetResponse;
}(SpeakeasyBase));
export { ReportsUserUsageReportGetResponse };
