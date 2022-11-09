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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AdexchangebuyerPerformanceReportListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPerformanceReportListQueryParams, _super);
    function AdexchangebuyerPerformanceReportListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=accountId" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDateTime" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "endDateTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDateTime" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "startDateTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPerformanceReportListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPerformanceReportListQueryParams };
var AdexchangebuyerPerformanceReportListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPerformanceReportListSecurity, _super);
    function AdexchangebuyerPerformanceReportListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPerformanceReportListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPerformanceReportListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPerformanceReportListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPerformanceReportListSecurity };
var AdexchangebuyerPerformanceReportListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPerformanceReportListRequest, _super);
    function AdexchangebuyerPerformanceReportListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPerformanceReportListQueryParams)
    ], AdexchangebuyerPerformanceReportListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerPerformanceReportListSecurity)
    ], AdexchangebuyerPerformanceReportListRequest.prototype, "security", void 0);
    return AdexchangebuyerPerformanceReportListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPerformanceReportListRequest };
var AdexchangebuyerPerformanceReportListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPerformanceReportListResponse, _super);
    function AdexchangebuyerPerformanceReportListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPerformanceReportListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PerformanceReportList)
    ], AdexchangebuyerPerformanceReportListResponse.prototype, "performanceReportList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPerformanceReportListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPerformanceReportListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPerformanceReportListResponse };
