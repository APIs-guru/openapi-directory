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
var AnalyticsadminAccountSummariesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListQueryParams, _super);
    function AnalyticsadminAccountSummariesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminAccountSummariesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListQueryParams };
var AnalyticsadminAccountSummariesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListSecurityOption1, _super);
    function AnalyticsadminAccountSummariesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminAccountSummariesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminAccountSummariesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminAccountSummariesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListSecurityOption1 };
var AnalyticsadminAccountSummariesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListSecurityOption2, _super);
    function AnalyticsadminAccountSummariesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminAccountSummariesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminAccountSummariesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminAccountSummariesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListSecurityOption2 };
var AnalyticsadminAccountSummariesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListSecurity, _super);
    function AnalyticsadminAccountSummariesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminAccountSummariesListSecurityOption1)
    ], AnalyticsadminAccountSummariesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminAccountSummariesListSecurityOption2)
    ], AnalyticsadminAccountSummariesListSecurity.prototype, "option2", void 0);
    return AnalyticsadminAccountSummariesListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListSecurity };
var AnalyticsadminAccountSummariesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListRequest, _super);
    function AnalyticsadminAccountSummariesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountSummariesListQueryParams)
    ], AnalyticsadminAccountSummariesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountSummariesListSecurity)
    ], AnalyticsadminAccountSummariesListRequest.prototype, "security", void 0);
    return AnalyticsadminAccountSummariesListRequest;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListRequest };
var AnalyticsadminAccountSummariesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountSummariesListResponse, _super);
    function AnalyticsadminAccountSummariesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminAccountSummariesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse)
    ], AnalyticsadminAccountSummariesListResponse.prototype, "googleAnalyticsAdminV1alphaListAccountSummariesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminAccountSummariesListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminAccountSummariesListResponse;
}(SpeakeasyBase));
export { AnalyticsadminAccountSummariesListResponse };
