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
var AnalyticsadminPropertiesUserLinksAuditPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditPathParams, _super);
    function AnalyticsadminPropertiesUserLinksAuditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesUserLinksAuditPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditPathParams };
var AnalyticsadminPropertiesUserLinksAuditQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksAuditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksAuditQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditQueryParams };
var AnalyticsadminPropertiesUserLinksAuditSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditSecurityOption1, _super);
    function AnalyticsadminPropertiesUserLinksAuditSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksAuditSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksAuditSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksAuditSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditSecurityOption1 };
var AnalyticsadminPropertiesUserLinksAuditSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditSecurityOption2, _super);
    function AnalyticsadminPropertiesUserLinksAuditSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksAuditSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksAuditSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksAuditSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditSecurityOption2 };
var AnalyticsadminPropertiesUserLinksAuditSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditSecurity, _super);
    function AnalyticsadminPropertiesUserLinksAuditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksAuditSecurityOption1)
    ], AnalyticsadminPropertiesUserLinksAuditSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksAuditSecurityOption2)
    ], AnalyticsadminPropertiesUserLinksAuditSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesUserLinksAuditSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditSecurity };
var AnalyticsadminPropertiesUserLinksAuditRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditRequest, _super);
    function AnalyticsadminPropertiesUserLinksAuditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksAuditPathParams)
    ], AnalyticsadminPropertiesUserLinksAuditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksAuditQueryParams)
    ], AnalyticsadminPropertiesUserLinksAuditRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaAuditUserLinksRequest)
    ], AnalyticsadminPropertiesUserLinksAuditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksAuditSecurity)
    ], AnalyticsadminPropertiesUserLinksAuditRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksAuditRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditRequest };
var AnalyticsadminPropertiesUserLinksAuditResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksAuditResponse, _super);
    function AnalyticsadminPropertiesUserLinksAuditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksAuditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse)
    ], AnalyticsadminPropertiesUserLinksAuditResponse.prototype, "googleAnalyticsAdminV1alphaAuditUserLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksAuditResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksAuditResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksAuditResponse };
