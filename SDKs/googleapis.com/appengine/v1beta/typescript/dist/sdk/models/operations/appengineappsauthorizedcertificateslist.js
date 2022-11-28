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
var AppengineAppsAuthorizedCertificatesListPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListPathParams, _super);
    function AppengineAppsAuthorizedCertificatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListPathParams.prototype, "appsId", void 0);
    return AppengineAppsAuthorizedCertificatesListPathParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListPathParams };
export var AppengineAppsAuthorizedCertificatesListViewEnum;
(function (AppengineAppsAuthorizedCertificatesListViewEnum) {
    AppengineAppsAuthorizedCertificatesListViewEnum["BasicCertificate"] = "BASIC_CERTIFICATE";
    AppengineAppsAuthorizedCertificatesListViewEnum["FullCertificate"] = "FULL_CERTIFICATE";
})(AppengineAppsAuthorizedCertificatesListViewEnum || (AppengineAppsAuthorizedCertificatesListViewEnum = {}));
var AppengineAppsAuthorizedCertificatesListQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListQueryParams, _super);
    function AppengineAppsAuthorizedCertificatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListQueryParams.prototype, "view", void 0);
    return AppengineAppsAuthorizedCertificatesListQueryParams;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListQueryParams };
var AppengineAppsAuthorizedCertificatesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListSecurityOption1, _super);
    function AppengineAppsAuthorizedCertificatesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesListSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListSecurityOption1 };
var AppengineAppsAuthorizedCertificatesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListSecurityOption2, _super);
    function AppengineAppsAuthorizedCertificatesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesListSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListSecurityOption2 };
var AppengineAppsAuthorizedCertificatesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListSecurityOption3, _super);
    function AppengineAppsAuthorizedCertificatesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsAuthorizedCertificatesListSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsAuthorizedCertificatesListSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListSecurityOption3 };
var AppengineAppsAuthorizedCertificatesListSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListSecurity, _super);
    function AppengineAppsAuthorizedCertificatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListSecurityOption1)
    ], AppengineAppsAuthorizedCertificatesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListSecurityOption2)
    ], AppengineAppsAuthorizedCertificatesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListSecurityOption3)
    ], AppengineAppsAuthorizedCertificatesListSecurity.prototype, "option3", void 0);
    return AppengineAppsAuthorizedCertificatesListSecurity;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListSecurity };
var AppengineAppsAuthorizedCertificatesListRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListRequest, _super);
    function AppengineAppsAuthorizedCertificatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListPathParams)
    ], AppengineAppsAuthorizedCertificatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListQueryParams)
    ], AppengineAppsAuthorizedCertificatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsAuthorizedCertificatesListSecurity)
    ], AppengineAppsAuthorizedCertificatesListRequest.prototype, "security", void 0);
    return AppengineAppsAuthorizedCertificatesListRequest;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListRequest };
var AppengineAppsAuthorizedCertificatesListResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsAuthorizedCertificatesListResponse, _super);
    function AppengineAppsAuthorizedCertificatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsAuthorizedCertificatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAuthorizedCertificatesResponse)
    ], AppengineAppsAuthorizedCertificatesListResponse.prototype, "listAuthorizedCertificatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsAuthorizedCertificatesListResponse.prototype, "statusCode", void 0);
    return AppengineAppsAuthorizedCertificatesListResponse;
}(SpeakeasyBase));
export { AppengineAppsAuthorizedCertificatesListResponse };
