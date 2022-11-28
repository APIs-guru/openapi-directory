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
var AppengineAppsLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetPathParams, _super);
    function AppengineAppsLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationsId" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetPathParams.prototype, "locationsId", void 0);
    return AppengineAppsLocationsGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetPathParams };
var AppengineAppsLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetQueryParams, _super);
    function AppengineAppsLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsLocationsGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetQueryParams };
var AppengineAppsLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetSecurityOption1, _super);
    function AppengineAppsLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetSecurityOption1 };
var AppengineAppsLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetSecurityOption2, _super);
    function AppengineAppsLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetSecurityOption2 };
var AppengineAppsLocationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetSecurityOption3, _super);
    function AppengineAppsLocationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsLocationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsLocationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsLocationsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetSecurityOption3 };
var AppengineAppsLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetSecurity, _super);
    function AppengineAppsLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsGetSecurityOption1)
    ], AppengineAppsLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsGetSecurityOption2)
    ], AppengineAppsLocationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsLocationsGetSecurityOption3)
    ], AppengineAppsLocationsGetSecurity.prototype, "option3", void 0);
    return AppengineAppsLocationsGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetSecurity };
var AppengineAppsLocationsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetRequest, _super);
    function AppengineAppsLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsLocationsGetPathParams)
    ], AppengineAppsLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsLocationsGetQueryParams)
    ], AppengineAppsLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsLocationsGetSecurity)
    ], AppengineAppsLocationsGetRequest.prototype, "security", void 0);
    return AppengineAppsLocationsGetRequest;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetRequest };
var AppengineAppsLocationsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsLocationsGetResponse, _super);
    function AppengineAppsLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Location)
    ], AppengineAppsLocationsGetResponse.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsLocationsGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsLocationsGetResponse;
}(SpeakeasyBase));
export { AppengineAppsLocationsGetResponse };
