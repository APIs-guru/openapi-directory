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
var AppengineAppsServicesPatchPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesPatchPathParams, _super);
    function AppengineAppsServicesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchPathParams.prototype, "appsId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchPathParams.prototype, "servicesId", void 0);
    return AppengineAppsServicesPatchPathParams;
}(SpeakeasyBase));
export { AppengineAppsServicesPatchPathParams };
var AppengineAppsServicesPatchQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesPatchQueryParams, _super);
    function AppengineAppsServicesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=migrateTraffic" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesPatchQueryParams.prototype, "migrateTraffic", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsServicesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsServicesPatchQueryParams;
}(SpeakeasyBase));
export { AppengineAppsServicesPatchQueryParams };
var AppengineAppsServicesPatchSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesPatchSecurity, _super);
    function AppengineAppsServicesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsServicesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsServicesPatchSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsServicesPatchSecurity;
}(SpeakeasyBase));
export { AppengineAppsServicesPatchSecurity };
var AppengineAppsServicesPatchRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesPatchRequest, _super);
    function AppengineAppsServicesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesPatchPathParams)
    ], AppengineAppsServicesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesPatchQueryParams)
    ], AppengineAppsServicesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Service)
    ], AppengineAppsServicesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AppengineAppsServicesPatchSecurity)
    ], AppengineAppsServicesPatchRequest.prototype, "security", void 0);
    return AppengineAppsServicesPatchRequest;
}(SpeakeasyBase));
export { AppengineAppsServicesPatchRequest };
var AppengineAppsServicesPatchResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsServicesPatchResponse, _super);
    function AppengineAppsServicesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AppengineAppsServicesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineAppsServicesPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AppengineAppsServicesPatchResponse.prototype, "statusCode", void 0);
    return AppengineAppsServicesPatchResponse;
}(SpeakeasyBase));
export { AppengineAppsServicesPatchResponse };
