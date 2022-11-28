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
var ApikeysProjectsLocationsKeysGetKeyStringPathParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringPathParams, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringPathParams.prototype, "name", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringPathParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringPathParams };
var ApikeysProjectsLocationsKeysGetKeyStringQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringQueryParams, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringQueryParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringQueryParams };
var ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1 };
var ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2 = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2 };
var ApikeysProjectsLocationsKeysGetKeyStringSecurity = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringSecurity, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2)
    ], ApikeysProjectsLocationsKeysGetKeyStringSecurity.prototype, "option2", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringSecurity;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringSecurity };
var ApikeysProjectsLocationsKeysGetKeyStringRequest = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringRequest, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetKeyStringPathParams)
    ], ApikeysProjectsLocationsKeysGetKeyStringRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetKeyStringQueryParams)
    ], ApikeysProjectsLocationsKeysGetKeyStringRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysGetKeyStringSecurity)
    ], ApikeysProjectsLocationsKeysGetKeyStringRequest.prototype, "security", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringRequest;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringRequest };
var ApikeysProjectsLocationsKeysGetKeyStringResponse = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysGetKeyStringResponse, _super);
    function ApikeysProjectsLocationsKeysGetKeyStringResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysGetKeyStringResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysGetKeyStringResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V2GetKeyStringResponse)
    ], ApikeysProjectsLocationsKeysGetKeyStringResponse.prototype, "v2GetKeyStringResponse", void 0);
    return ApikeysProjectsLocationsKeysGetKeyStringResponse;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysGetKeyStringResponse };
