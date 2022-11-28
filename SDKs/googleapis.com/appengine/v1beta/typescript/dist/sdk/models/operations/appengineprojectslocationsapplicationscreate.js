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
var AppengineProjectsLocationsApplicationsCreatePathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsCreatePathParams, _super);
    function AppengineProjectsLocationsApplicationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreatePathParams.prototype, "locationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreatePathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsApplicationsCreatePathParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsCreatePathParams };
var AppengineProjectsLocationsApplicationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsCreateQueryParams, _super);
    function AppengineProjectsLocationsApplicationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsApplicationsCreateQueryParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsCreateQueryParams };
var AppengineProjectsLocationsApplicationsCreateSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsCreateSecurity, _super);
    function AppengineProjectsLocationsApplicationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsApplicationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsApplicationsCreateSecurity.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsApplicationsCreateSecurity;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsCreateSecurity };
var AppengineProjectsLocationsApplicationsCreateRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsCreateRequest, _super);
    function AppengineProjectsLocationsApplicationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsCreatePathParams)
    ], AppengineProjectsLocationsApplicationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsCreateQueryParams)
    ], AppengineProjectsLocationsApplicationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApplicationInput)
    ], AppengineProjectsLocationsApplicationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsCreateSecurity)
    ], AppengineProjectsLocationsApplicationsCreateRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsApplicationsCreateRequest;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsCreateRequest };
var AppengineProjectsLocationsApplicationsCreateResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsCreateResponse, _super);
    function AppengineProjectsLocationsApplicationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineProjectsLocationsApplicationsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsApplicationsCreateResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsApplicationsCreateResponse;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsCreateResponse };
