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
var AppengineProjectsLocationsApplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetPathParams, _super);
    function AppengineProjectsLocationsApplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetPathParams.prototype, "applicationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetPathParams.prototype, "locationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsApplicationsGetPathParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetPathParams };
var AppengineProjectsLocationsApplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetQueryParams, _super);
    function AppengineProjectsLocationsApplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsApplicationsGetQueryParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetQueryParams };
var AppengineProjectsLocationsApplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetSecurityOption1, _super);
    function AppengineProjectsLocationsApplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsApplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetSecurityOption1 };
var AppengineProjectsLocationsApplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetSecurityOption2, _super);
    function AppengineProjectsLocationsApplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsApplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetSecurityOption2 };
var AppengineProjectsLocationsApplicationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetSecurityOption3, _super);
    function AppengineProjectsLocationsApplicationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsApplicationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsApplicationsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetSecurityOption3 };
var AppengineProjectsLocationsApplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetSecurity, _super);
    function AppengineProjectsLocationsApplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetSecurityOption1)
    ], AppengineProjectsLocationsApplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetSecurityOption2)
    ], AppengineProjectsLocationsApplicationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetSecurityOption3)
    ], AppengineProjectsLocationsApplicationsGetSecurity.prototype, "option3", void 0);
    return AppengineProjectsLocationsApplicationsGetSecurity;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetSecurity };
var AppengineProjectsLocationsApplicationsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetRequest, _super);
    function AppengineProjectsLocationsApplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetPathParams)
    ], AppengineProjectsLocationsApplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetQueryParams)
    ], AppengineProjectsLocationsApplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsApplicationsGetSecurity)
    ], AppengineProjectsLocationsApplicationsGetRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsApplicationsGetRequest;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetRequest };
var AppengineProjectsLocationsApplicationsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsApplicationsGetResponse, _super);
    function AppengineProjectsLocationsApplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Application)
    ], AppengineProjectsLocationsApplicationsGetResponse.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsApplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsApplicationsGetResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsApplicationsGetResponse;
}(SpeakeasyBase));
export { AppengineProjectsLocationsApplicationsGetResponse };
