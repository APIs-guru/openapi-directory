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
var AppengineAppsAuthorizedCertificatesPatchPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesPatchPathParams, _super);
    function AppengineAppsAuthorizedCertificatesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizedCertificatesId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchPathParams.prototype, "authorizedCertificatesId", void 0);
    return AppengineAppsAuthorizedCertificatesPatchPathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesPatchPathParams };
var AppengineAppsAuthorizedCertificatesPatchQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesPatchQueryParams, _super);
    function AppengineAppsAuthorizedCertificatesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsAuthorizedCertificatesPatchQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesPatchQueryParams };
var AppengineAppsAuthorizedCertificatesPatchSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesPatchSecurity, _super);
    function AppengineAppsAuthorizedCertificatesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesPatchSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesPatchSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesPatchSecurity };
var AppengineAppsAuthorizedCertificatesPatchRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesPatchRequest, _super);
    function AppengineAppsAuthorizedCertificatesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesPatchPathParams)
    ], AppengineAppsAuthorizedCertificatesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesPatchQueryParams)
    ], AppengineAppsAuthorizedCertificatesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AuthorizedCertificate)
    ], AppengineAppsAuthorizedCertificatesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesPatchSecurity)
    ], AppengineAppsAuthorizedCertificatesPatchRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedCertificatesPatchRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesPatchRequest };
var AppengineAppsAuthorizedCertificatesPatchResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesPatchResponse, _super);
    function AppengineAppsAuthorizedCertificatesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizedCertificate)
    ], AppengineAppsAuthorizedCertificatesPatchResponse.prototype, "authorizedCertificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesPatchResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedCertificatesPatchResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesPatchResponse };
