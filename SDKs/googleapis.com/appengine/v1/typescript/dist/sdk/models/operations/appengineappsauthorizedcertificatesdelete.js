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
var AppengineAppsAuthorizedCertificatesDeletePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesDeletePathParams, _super);
    function AppengineAppsAuthorizedCertificatesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeletePathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizedCertificatesId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeletePathParams.prototype, "authorizedCertificatesId", void 0);
    return AppengineAppsAuthorizedCertificatesDeletePathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesDeletePathParams };
var AppengineAppsAuthorizedCertificatesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesDeleteQueryParams, _super);
    function AppengineAppsAuthorizedCertificatesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsAuthorizedCertificatesDeleteQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesDeleteQueryParams };
var AppengineAppsAuthorizedCertificatesDeleteSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesDeleteSecurity, _super);
    function AppengineAppsAuthorizedCertificatesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesDeleteSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesDeleteSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesDeleteSecurity };
var AppengineAppsAuthorizedCertificatesDeleteRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesDeleteRequest, _super);
    function AppengineAppsAuthorizedCertificatesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesDeletePathParams)
    ], AppengineAppsAuthorizedCertificatesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesDeleteQueryParams)
    ], AppengineAppsAuthorizedCertificatesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesDeleteSecurity)
    ], AppengineAppsAuthorizedCertificatesDeleteRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedCertificatesDeleteRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesDeleteRequest };
var AppengineAppsAuthorizedCertificatesDeleteResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesDeleteResponse, _super);
    function AppengineAppsAuthorizedCertificatesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AppengineAppsAuthorizedCertificatesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesDeleteResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedCertificatesDeleteResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesDeleteResponse };
