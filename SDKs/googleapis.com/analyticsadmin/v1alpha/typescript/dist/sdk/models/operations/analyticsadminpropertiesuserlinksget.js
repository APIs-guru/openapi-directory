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
var AnalyticsadminPropertiesUserLinksGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetPathParams, _super);
    function AnalyticsadminPropertiesUserLinksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetPathParams.prototype, "name", void 0);
    return AnalyticsadminPropertiesUserLinksGetPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetPathParams };
var AnalyticsadminPropertiesUserLinksGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetQueryParams, _super);
    function AnalyticsadminPropertiesUserLinksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesUserLinksGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetQueryParams };
var AnalyticsadminPropertiesUserLinksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetSecurityOption1, _super);
    function AnalyticsadminPropertiesUserLinksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetSecurityOption1 };
var AnalyticsadminPropertiesUserLinksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetSecurityOption2, _super);
    function AnalyticsadminPropertiesUserLinksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesUserLinksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesUserLinksGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesUserLinksGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetSecurityOption2 };
var AnalyticsadminPropertiesUserLinksGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetSecurity, _super);
    function AnalyticsadminPropertiesUserLinksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksGetSecurityOption1)
    ], AnalyticsadminPropertiesUserLinksGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksGetSecurityOption2)
    ], AnalyticsadminPropertiesUserLinksGetSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesUserLinksGetSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetSecurity };
var AnalyticsadminPropertiesUserLinksGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetRequest, _super);
    function AnalyticsadminPropertiesUserLinksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksGetPathParams)
    ], AnalyticsadminPropertiesUserLinksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksGetQueryParams)
    ], AnalyticsadminPropertiesUserLinksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesUserLinksGetSecurity)
    ], AnalyticsadminPropertiesUserLinksGetRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesUserLinksGetRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetRequest };
var AnalyticsadminPropertiesUserLinksGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesUserLinksGetResponse, _super);
    function AnalyticsadminPropertiesUserLinksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesUserLinksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaUserLink)
    ], AnalyticsadminPropertiesUserLinksGetResponse.prototype, "googleAnalyticsAdminV1alphaUserLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesUserLinksGetResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesUserLinksGetResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesUserLinksGetResponse };
