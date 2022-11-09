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
var AppengineAppsServicesVersionsPatchPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsPatchPathParams, _super);
    function AppengineAppsServicesVersionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchPathParams.prototype, "servicesId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=versionsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchPathParams.prototype, "versionsId", void 0);
    return AppengineAppsServicesVersionsPatchPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsPatchPathParams };
var AppengineAppsServicesVersionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsPatchQueryParams, _super);
    function AppengineAppsServicesVersionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesVersionsPatchQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsPatchQueryParams };
var AppengineAppsServicesVersionsPatchSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsPatchSecurity, _super);
    function AppengineAppsServicesVersionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesVersionsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesVersionsPatchSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsServicesVersionsPatchSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsPatchSecurity };
var AppengineAppsServicesVersionsPatchRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsPatchRequest, _super);
    function AppengineAppsServicesVersionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsPatchPathParams)
    ], AppengineAppsServicesVersionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsPatchQueryParams)
    ], AppengineAppsServicesVersionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Version)
    ], AppengineAppsServicesVersionsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesVersionsPatchSecurity)
    ], AppengineAppsServicesVersionsPatchRequest.prototype, "security", void 0);
    return AppengineAppsServicesVersionsPatchRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsPatchRequest };
var AppengineAppsServicesVersionsPatchResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesVersionsPatchResponse, _super);
    function AppengineAppsServicesVersionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesVersionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineAppsServicesVersionsPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesVersionsPatchResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesVersionsPatchResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesVersionsPatchResponse };
