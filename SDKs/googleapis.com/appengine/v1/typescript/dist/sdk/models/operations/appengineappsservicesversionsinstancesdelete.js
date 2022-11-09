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
var AppengineAppsServicesVersionsInstancesDeletePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesDeletePathParams, _super);
    function AppengineAppsServicesVersionsInstancesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeletePathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=instancesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeletePathParams.prototype, "instancesId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeletePathParams.prototype, "servicesId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeletePathParams.prototype, "versionsId", void 0);
    return AppengineAppsServicesVersionsInstancesDeletePathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesDeletePathParams };
var AppengineAppsServicesVersionsInstancesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesDeleteQueryParams, _super);
    function AppengineAppsServicesVersionsInstancesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesVersionsInstancesDeleteQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesDeleteQueryParams };
var AppengineAppsServicesVersionsInstancesDeleteSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesDeleteSecurity, _super);
    function AppengineAppsServicesVersionsInstancesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsInstancesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsInstancesDeleteSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsInstancesDeleteSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesDeleteSecurity };
var AppengineAppsServicesVersionsInstancesDeleteRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesDeleteRequest, _super);
    function AppengineAppsServicesVersionsInstancesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesDeletePathParams)
    ], AppengineAppsServicesVersionsInstancesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesDeleteQueryParams)
    ], AppengineAppsServicesVersionsInstancesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsInstancesDeleteSecurity)
    ], AppengineAppsServicesVersionsInstancesDeleteRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsInstancesDeleteRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesDeleteRequest };
var AppengineAppsServicesVersionsInstancesDeleteResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsInstancesDeleteResponse, _super);
    function AppengineAppsServicesVersionsInstancesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsInstancesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineAppsServicesVersionsInstancesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsInstancesDeleteResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesVersionsInstancesDeleteResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsInstancesDeleteResponse };
