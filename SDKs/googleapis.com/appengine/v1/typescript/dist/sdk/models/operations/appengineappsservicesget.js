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
var AppengineAppsServicesGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetPathParams, _super);
    function AppengineAppsServicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetPathParams.prototype, "servicesId", void 0);
    return AppengineAppsServicesGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesGetPathParams };
var AppengineAppsServicesGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetQueryParams, _super);
    function AppengineAppsServicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesGetQueryParams };
var AppengineAppsServicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetSecurityOption1, _super);
    function AppengineAppsServicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsServicesGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsServicesGetSecurityOption1 };
var AppengineAppsServicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetSecurityOption2, _super);
    function AppengineAppsServicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsServicesGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsServicesGetSecurityOption2 };
var AppengineAppsServicesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetSecurityOption3, _super);
    function AppengineAppsServicesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsServicesGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsServicesGetSecurityOption3 };
var AppengineAppsServicesGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetSecurity, _super);
    function AppengineAppsServicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesGetSecurityOption1)
    ], AppengineAppsServicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesGetSecurityOption2)
    ], AppengineAppsServicesGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsServicesGetSecurityOption3)
    ], AppengineAppsServicesGetSecurity.prototype, "option3", void 0);
    return AppengineAppsServicesGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesGetSecurity };
var AppengineAppsServicesGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetRequest, _super);
    function AppengineAppsServicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesGetPathParams)
    ], AppengineAppsServicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesGetQueryParams)
    ], AppengineAppsServicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesGetSecurity)
    ], AppengineAppsServicesGetRequest.prototype, "security", void 0);
    return AppengineAppsServicesGetRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesGetRequest };
var AppengineAppsServicesGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesGetResponse, _super);
    function AppengineAppsServicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Service)
    ], AppengineAppsServicesGetResponse.prototype, "service", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesGetResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesGetResponse };
