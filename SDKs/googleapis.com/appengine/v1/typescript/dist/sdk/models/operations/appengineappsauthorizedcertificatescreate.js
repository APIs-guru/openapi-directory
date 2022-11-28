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
var AppengineAppsAuthorizedCertificatesCreatePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesCreatePathParams, _super);
    function AppengineAppsAuthorizedCertificatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreatePathParams.prototype, "appsId", void 0);
    return AppengineAppsAuthorizedCertificatesCreatePathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesCreatePathParams };
var AppengineAppsAuthorizedCertificatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesCreateQueryParams, _super);
    function AppengineAppsAuthorizedCertificatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsAuthorizedCertificatesCreateQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesCreateQueryParams };
var AppengineAppsAuthorizedCertificatesCreateSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesCreateSecurity, _super);
    function AppengineAppsAuthorizedCertificatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesCreateSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesCreateSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesCreateSecurity };
var AppengineAppsAuthorizedCertificatesCreateRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesCreateRequest, _super);
    function AppengineAppsAuthorizedCertificatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesCreatePathParams)
    ], AppengineAppsAuthorizedCertificatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesCreateQueryParams)
    ], AppengineAppsAuthorizedCertificatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AuthorizedCertificate)
    ], AppengineAppsAuthorizedCertificatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesCreateSecurity)
    ], AppengineAppsAuthorizedCertificatesCreateRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedCertificatesCreateRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesCreateRequest };
var AppengineAppsAuthorizedCertificatesCreateResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesCreateResponse, _super);
    function AppengineAppsAuthorizedCertificatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizedCertificate)
    ], AppengineAppsAuthorizedCertificatesCreateResponse.prototype, "authorizedCertificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesCreateResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedCertificatesCreateResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesCreateResponse };
