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
var AppengineAppsServicesVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetPathParams, _super);
    function AppengineAppsServicesVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetPathParams.prototype, "servicesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetPathParams.prototype, "versionsId", void 0);
    return AppengineAppsServicesVersionsGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetPathParams };
export var AppengineAppsServicesVersionsGetViewEnum;
(function (AppengineAppsServicesVersionsGetViewEnum) {
    AppengineAppsServicesVersionsGetViewEnum["Basic"] = "BASIC";
    AppengineAppsServicesVersionsGetViewEnum["Full"] = "FULL";
})(AppengineAppsServicesVersionsGetViewEnum || (AppengineAppsServicesVersionsGetViewEnum = {}));
var AppengineAppsServicesVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetQueryParams, _super);
    function AppengineAppsServicesVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetQueryParams.prototype, "view", void 0);
    return AppengineAppsServicesVersionsGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetQueryParams };
var AppengineAppsServicesVersionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetSecurityOption1, _super);
    function AppengineAppsServicesVersionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetSecurityOption1 };
var AppengineAppsServicesVersionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetSecurityOption2, _super);
    function AppengineAppsServicesVersionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetSecurityOption2 };
var AppengineAppsServicesVersionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetSecurityOption3, _super);
    function AppengineAppsServicesVersionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetSecurityOption3 };
var AppengineAppsServicesVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetSecurity, _super);
    function AppengineAppsServicesVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsGetSecurityOption1)
    ], AppengineAppsServicesVersionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsGetSecurityOption2)
    ], AppengineAppsServicesVersionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsGetSecurityOption3)
    ], AppengineAppsServicesVersionsGetSecurity.prototype, "option3", void 0);
    return AppengineAppsServicesVersionsGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetSecurity };
var AppengineAppsServicesVersionsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetRequest, _super);
    function AppengineAppsServicesVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsGetPathParams)
    ], AppengineAppsServicesVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsGetQueryParams)
    ], AppengineAppsServicesVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsGetSecurity)
    ], AppengineAppsServicesVersionsGetRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsGetRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetRequest };
var AppengineAppsServicesVersionsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsGetResponse, _super);
    function AppengineAppsServicesVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Version)
    ], AppengineAppsServicesVersionsGetResponse.prototype, "version", void 0);
    return AppengineAppsServicesVersionsGetResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsGetResponse };
