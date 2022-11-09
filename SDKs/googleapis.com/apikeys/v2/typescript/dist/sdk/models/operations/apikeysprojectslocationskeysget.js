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
var ApikeysProjectsLocationsKeysGetPathParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetPathParams, _super);
    function ApikeysProjectsLocationsKeysGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetPathParams.prototype, "name", void 0);
    return ApikeysProjectsLocationsKeysGetPathParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetPathParams };
var ApikeysProjectsLocationsKeysGetQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetQueryParams, _super);
    function ApikeysProjectsLocationsKeysGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysProjectsLocationsKeysGetQueryParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetQueryParams };
var ApikeysProjectsLocationsKeysGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetSecurityOption1, _super);
    function ApikeysProjectsLocationsKeysGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysGetSecurityOption1.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysGetSecurityOption1;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetSecurityOption1 };
var ApikeysProjectsLocationsKeysGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetSecurityOption2, _super);
    function ApikeysProjectsLocationsKeysGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysGetSecurityOption2.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysGetSecurityOption2;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetSecurityOption2 };
var ApikeysProjectsLocationsKeysGetSecurity = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetSecurity, _super);
    function ApikeysProjectsLocationsKeysGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetSecurityOption1)
    ], ApikeysProjectsLocationsKeysGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetSecurityOption2)
    ], ApikeysProjectsLocationsKeysGetSecurity.prototype, "option2", void 0);
    return ApikeysProjectsLocationsKeysGetSecurity;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetSecurity };
var ApikeysProjectsLocationsKeysGetRequest = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetRequest, _super);
    function ApikeysProjectsLocationsKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetPathParams)
    ], ApikeysProjectsLocationsKeysGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetQueryParams)
    ], ApikeysProjectsLocationsKeysGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetSecurity)
    ], ApikeysProjectsLocationsKeysGetRequest.prototype, "security", void 0);
    return ApikeysProjectsLocationsKeysGetRequest;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetRequest };
var ApikeysProjectsLocationsKeysGetResponse = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetResponse, _super);
    function ApikeysProjectsLocationsKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.V2Key)
    ], ApikeysProjectsLocationsKeysGetResponse.prototype, "v2Key", void 0);
    return ApikeysProjectsLocationsKeysGetResponse;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetResponse };
