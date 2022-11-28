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
var AppengineAppsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetPathParams, _super);
    function AppengineAppsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetPathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operationsId" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetPathParams.prototype, "operationsId", void 0);
    return AppengineAppsOperationsGetPathParams;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetPathParams };
var AppengineAppsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetQueryParams, _super);
    function AppengineAppsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsOperationsGetQueryParams;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetQueryParams };
var AppengineAppsOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetSecurityOption1, _super);
    function AppengineAppsOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AppengineAppsOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetSecurityOption1 };
var AppengineAppsOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetSecurityOption2, _super);
    function AppengineAppsOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AppengineAppsOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetSecurityOption2 };
var AppengineAppsOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetSecurityOption3, _super);
    function AppengineAppsOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return AppengineAppsOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetSecurityOption3 };
var AppengineAppsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetSecurity, _super);
    function AppengineAppsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsOperationsGetSecurityOption1)
    ], AppengineAppsOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsOperationsGetSecurityOption2)
    ], AppengineAppsOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AppengineAppsOperationsGetSecurityOption3)
    ], AppengineAppsOperationsGetSecurity.prototype, "option3", void 0);
    return AppengineAppsOperationsGetSecurity;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetSecurity };
var AppengineAppsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetRequest, _super);
    function AppengineAppsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsOperationsGetPathParams)
    ], AppengineAppsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsOperationsGetQueryParams)
    ], AppengineAppsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsOperationsGetSecurity)
    ], AppengineAppsOperationsGetRequest.prototype, "security", void 0);
    return AppengineAppsOperationsGetRequest;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetRequest };
var AppengineAppsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsOperationsGetResponse, _super);
    function AppengineAppsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineAppsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsOperationsGetResponse.prototype, "statusCode", void 0);
    return AppengineAppsOperationsGetResponse;
}(SpeakeasyBase));
export { AppengineAppsOperationsGetResponse };
