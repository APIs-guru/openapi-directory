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
var AppengineProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetPathParams, _super);
    function AppengineProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetPathParams.prototype, "locationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operationsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetPathParams.prototype, "operationsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectsId" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetPathParams.prototype, "projectsId", void 0);
    return AppengineProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetPathParams };
var AppengineProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetQueryParams, _super);
    function AppengineProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetQueryParams };
var AppengineProjectsLocationsOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetSecurityOption1, _super);
    function AppengineProjectsLocationsOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetSecurityOption1 };
var AppengineProjectsLocationsOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetSecurityOption2, _super);
    function AppengineProjectsLocationsOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetSecurityOption2 };
var AppengineProjectsLocationsOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetSecurityOption3, _super);
    function AppengineProjectsLocationsOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineProjectsLocationsOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineProjectsLocationsOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineProjectsLocationsOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetSecurityOption3 };
var AppengineProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetSecurity, _super);
    function AppengineProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetSecurityOption1)
    ], AppengineProjectsLocationsOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetSecurityOption2)
    ], AppengineProjectsLocationsOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetSecurityOption3)
    ], AppengineProjectsLocationsOperationsGetSecurity.prototype, "option3", void 0);
    return AppengineProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetSecurity };
var AppengineProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetRequest, _super);
    function AppengineProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetPathParams)
    ], AppengineProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetQueryParams)
    ], AppengineProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineProjectsLocationsOperationsGetSecurity)
    ], AppengineProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return AppengineProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetRequest };
var AppengineProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineProjectsLocationsOperationsGetResponse, _super);
    function AppengineProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return AppengineProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { AppengineProjectsLocationsOperationsGetResponse };
