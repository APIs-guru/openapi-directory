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
var ApikeysKeysLookupKeyQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeyQueryParams, _super);
    function ApikeysKeysLookupKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keyString" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "keyString", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysKeysLookupKeyQueryParams;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeyQueryParams };
var ApikeysKeysLookupKeySecurityOption1 = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeySecurityOption1, _super);
    function ApikeysKeysLookupKeySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysKeysLookupKeySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysKeysLookupKeySecurityOption1.prototype, "oauth2c", void 0);
    return ApikeysKeysLookupKeySecurityOption1;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeySecurityOption1 };
var ApikeysKeysLookupKeySecurityOption2 = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeySecurityOption2, _super);
    function ApikeysKeysLookupKeySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysKeysLookupKeySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysKeysLookupKeySecurityOption2.prototype, "oauth2c", void 0);
    return ApikeysKeysLookupKeySecurityOption2;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeySecurityOption2 };
var ApikeysKeysLookupKeySecurity = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeySecurity, _super);
    function ApikeysKeysLookupKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysKeysLookupKeySecurityOption1)
    ], ApikeysKeysLookupKeySecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ApikeysKeysLookupKeySecurityOption2)
    ], ApikeysKeysLookupKeySecurity.prototype, "option2", void 0);
    return ApikeysKeysLookupKeySecurity;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeySecurity };
var ApikeysKeysLookupKeyRequest = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeyRequest, _super);
    function ApikeysKeysLookupKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysKeysLookupKeyQueryParams)
    ], ApikeysKeysLookupKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysKeysLookupKeySecurity)
    ], ApikeysKeysLookupKeyRequest.prototype, "security", void 0);
    return ApikeysKeysLookupKeyRequest;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeyRequest };
var ApikeysKeysLookupKeyResponse = /** @class */ (function (_super) {
    __extends(ApikeysKeysLookupKeyResponse, _super);
    function ApikeysKeysLookupKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApikeysKeysLookupKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApikeysKeysLookupKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.V2LookupKeyResponse)
    ], ApikeysKeysLookupKeyResponse.prototype, "v2LookupKeyResponse", void 0);
    return ApikeysKeysLookupKeyResponse;
}(SpeakeasyBase));
export { ApikeysKeysLookupKeyResponse };
