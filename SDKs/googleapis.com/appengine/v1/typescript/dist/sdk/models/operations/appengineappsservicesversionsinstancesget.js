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
var AppengineAppsServicesVersionsInstancesGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetPathParams, _super);
    function AppengineAppsServicesVersionsInstancesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instancesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetPathParams.prototype, "instancesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetPathParams.prototype, "servicesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetPathParams.prototype, "versionsId", void 0);
    return AppengineAppsServicesVersionsInstancesGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetPathParams };
var AppengineAppsServicesVersionsInstancesGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetQueryParams, _super);
    function AppengineAppsServicesVersionsInstancesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesVersionsInstancesGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetQueryParams };
var AppengineAppsServicesVersionsInstancesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetSecurityOption1, _super);
    function AppengineAppsServicesVersionsInstancesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetSecurityOption1 };
var AppengineAppsServicesVersionsInstancesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetSecurityOption2, _super);
    function AppengineAppsServicesVersionsInstancesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetSecurityOption2 };
var AppengineAppsServicesVersionsInstancesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetSecurityOption3, _super);
    function AppengineAppsServicesVersionsInstancesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetSecurityOption3 };
var AppengineAppsServicesVersionsInstancesGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetSecurity, _super);
    function AppengineAppsServicesVersionsInstancesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetSecurityOption1)
    ], AppengineAppsServicesVersionsInstancesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetSecurityOption2)
    ], AppengineAppsServicesVersionsInstancesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetSecurityOption3)
    ], AppengineAppsServicesVersionsInstancesGetSecurity.prototype, "option3", void 0);
    return AppengineAppsServicesVersionsInstancesGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetSecurity };
var AppengineAppsServicesVersionsInstancesGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetRequest, _super);
    function AppengineAppsServicesVersionsInstancesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetPathParams)
    ], AppengineAppsServicesVersionsInstancesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetQueryParams)
    ], AppengineAppsServicesVersionsInstancesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesGetSecurity)
    ], AppengineAppsServicesVersionsInstancesGetRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsInstancesGetRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetRequest };
var AppengineAppsServicesVersionsInstancesGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesGetResponse, _super);
    function AppengineAppsServicesVersionsInstancesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Instance)
    ], AppengineAppsServicesVersionsInstancesGetResponse.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsInstancesGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesVersionsInstancesGetResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesGetResponse };
