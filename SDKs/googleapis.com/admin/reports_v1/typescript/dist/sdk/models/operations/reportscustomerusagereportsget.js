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
var ReportsCustomerUsageReportsGetPathParams = /** @class */ (function (_super) {
    __extends(ReportsCustomerUsageReportsGetPathParams, _super);
    function ReportsCustomerUsageReportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetPathParams.prototype, "date", void 0);
    return ReportsCustomerUsageReportsGetPathParams;
}(SpeakeasyBase));
export { ReportsCustomerUsageReportsGetPathParams };
var ReportsCustomerUsageReportsGetQueryParams = /** @class */ (function (_super) {
    __extends(ReportsCustomerUsageReportsGetQueryParams, _super);
    function ReportsCustomerUsageReportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ReportsCustomerUsageReportsGetQueryParams;
}(SpeakeasyBase));
export { ReportsCustomerUsageReportsGetQueryParams };
var ReportsCustomerUsageReportsGetSecurity = /** @class */ (function (_super) {
    __extends(ReportsCustomerUsageReportsGetSecurity, _super);
    function ReportsCustomerUsageReportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReportsCustomerUsageReportsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReportsCustomerUsageReportsGetSecurity.prototype, "oauth2c", void 0);
    return ReportsCustomerUsageReportsGetSecurity;
}(SpeakeasyBase));
export { ReportsCustomerUsageReportsGetSecurity };
var ReportsCustomerUsageReportsGetRequest = /** @class */ (function (_super) {
    __extends(ReportsCustomerUsageReportsGetRequest, _super);
    function ReportsCustomerUsageReportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsCustomerUsageReportsGetPathParams)
    ], ReportsCustomerUsageReportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsCustomerUsageReportsGetQueryParams)
    ], ReportsCustomerUsageReportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportsCustomerUsageReportsGetSecurity)
    ], ReportsCustomerUsageReportsGetRequest.prototype, "security", void 0);
    return ReportsCustomerUsageReportsGetRequest;
}(SpeakeasyBase));
export { ReportsCustomerUsageReportsGetRequest };
var ReportsCustomerUsageReportsGetResponse = /** @class */ (function (_super) {
    __extends(ReportsCustomerUsageReportsGetResponse, _super);
    function ReportsCustomerUsageReportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportsCustomerUsageReportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportsCustomerUsageReportsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UsageReports)
    ], ReportsCustomerUsageReportsGetResponse.prototype, "usageReports", void 0);
    return ReportsCustomerUsageReportsGetResponse;
}(SpeakeasyBase));
export { ReportsCustomerUsageReportsGetResponse };
