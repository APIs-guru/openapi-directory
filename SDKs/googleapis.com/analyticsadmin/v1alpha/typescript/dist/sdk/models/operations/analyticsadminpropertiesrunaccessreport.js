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
var AnalyticsadminPropertiesRunAccessReportPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportPathParams, _super);
    function AnalyticsadminPropertiesRunAccessReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportPathParams.prototype, "entity", void 0);
    return AnalyticsadminPropertiesRunAccessReportPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportPathParams };
var AnalyticsadminPropertiesRunAccessReportQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportQueryParams, _super);
    function AnalyticsadminPropertiesRunAccessReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesRunAccessReportQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportQueryParams };
var AnalyticsadminPropertiesRunAccessReportSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportSecurityOption1, _super);
    function AnalyticsadminPropertiesRunAccessReportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesRunAccessReportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesRunAccessReportSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesRunAccessReportSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportSecurityOption1 };
var AnalyticsadminPropertiesRunAccessReportSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportSecurityOption2, _super);
    function AnalyticsadminPropertiesRunAccessReportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesRunAccessReportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesRunAccessReportSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesRunAccessReportSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportSecurityOption2 };
var AnalyticsadminPropertiesRunAccessReportSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportSecurity, _super);
    function AnalyticsadminPropertiesRunAccessReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesRunAccessReportSecurityOption1)
    ], AnalyticsadminPropertiesRunAccessReportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesRunAccessReportSecurityOption2)
    ], AnalyticsadminPropertiesRunAccessReportSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesRunAccessReportSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportSecurity };
var AnalyticsadminPropertiesRunAccessReportRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportRequest, _super);
    function AnalyticsadminPropertiesRunAccessReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesRunAccessReportPathParams)
    ], AnalyticsadminPropertiesRunAccessReportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesRunAccessReportQueryParams)
    ], AnalyticsadminPropertiesRunAccessReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaRunAccessReportRequest)
    ], AnalyticsadminPropertiesRunAccessReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesRunAccessReportSecurity)
    ], AnalyticsadminPropertiesRunAccessReportRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesRunAccessReportRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportRequest };
var AnalyticsadminPropertiesRunAccessReportResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesRunAccessReportResponse, _super);
    function AnalyticsadminPropertiesRunAccessReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesRunAccessReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse)
    ], AnalyticsadminPropertiesRunAccessReportResponse.prototype, "googleAnalyticsAdminV1alphaRunAccessReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesRunAccessReportResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesRunAccessReportResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesRunAccessReportResponse };
