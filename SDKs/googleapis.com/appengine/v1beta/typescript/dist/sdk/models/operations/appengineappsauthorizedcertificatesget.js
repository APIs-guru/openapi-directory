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
var AppengineAppsAuthorizedCertificatesGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetPathParams, _super);
    function AppengineAppsAuthorizedCertificatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=authorizedCertificatesId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetPathParams.prototype, "authorizedCertificatesId", void 0);
    return AppengineAppsAuthorizedCertificatesGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetPathParams };
export var AppengineAppsAuthorizedCertificatesGetViewEnum;
(function (AppengineAppsAuthorizedCertificatesGetViewEnum) {
    AppengineAppsAuthorizedCertificatesGetViewEnum["BasicCertificate"] = "BASIC_CERTIFICATE";
    AppengineAppsAuthorizedCertificatesGetViewEnum["FullCertificate"] = "FULL_CERTIFICATE";
})(AppengineAppsAuthorizedCertificatesGetViewEnum || (AppengineAppsAuthorizedCertificatesGetViewEnum = {}));
var AppengineAppsAuthorizedCertificatesGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetQueryParams, _super);
    function AppengineAppsAuthorizedCertificatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetQueryParams.prototype, "view", void 0);
    return AppengineAppsAuthorizedCertificatesGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetQueryParams };
var AppengineAppsAuthorizedCertificatesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetSecurityOption1, _super);
    function AppengineAppsAuthorizedCertificatesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetSecurityOption1 };
var AppengineAppsAuthorizedCertificatesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetSecurityOption2, _super);
    function AppengineAppsAuthorizedCertificatesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetSecurityOption2 };
var AppengineAppsAuthorizedCertificatesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetSecurityOption3, _super);
    function AppengineAppsAuthorizedCertificatesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetSecurityOption3 };
var AppengineAppsAuthorizedCertificatesGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetSecurity, _super);
    function AppengineAppsAuthorizedCertificatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetSecurityOption1)
    ], AppengineAppsAuthorizedCertificatesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetSecurityOption2)
    ], AppengineAppsAuthorizedCertificatesGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetSecurityOption3)
    ], AppengineAppsAuthorizedCertificatesGetSecurity.prototype, "option3", void 0);
    return AppengineAppsAuthorizedCertificatesGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetSecurity };
var AppengineAppsAuthorizedCertificatesGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetRequest, _super);
    function AppengineAppsAuthorizedCertificatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetPathParams)
    ], AppengineAppsAuthorizedCertificatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetQueryParams)
    ], AppengineAppsAuthorizedCertificatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesGetSecurity)
    ], AppengineAppsAuthorizedCertificatesGetRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedCertificatesGetRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetRequest };
var AppengineAppsAuthorizedCertificatesGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesGetResponse, _super);
    function AppengineAppsAuthorizedCertificatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AuthorizedCertificate)
    ], AppengineAppsAuthorizedCertificatesGetResponse.prototype, "authorizedCertificate", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedCertificatesGetResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesGetResponse };
