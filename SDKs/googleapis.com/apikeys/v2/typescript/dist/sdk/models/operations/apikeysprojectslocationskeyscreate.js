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
var ApikeysProjectsLocationsKeysCreatePathParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysCreatePathParams, _super);
    function ApikeysProjectsLocationsKeysCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreatePathParams.prototype, "parent", void 0);
    return ApikeysProjectsLocationsKeysCreatePathParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysCreatePathParams };
var ApikeysProjectsLocationsKeysCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysCreateQueryParams, _super);
    function ApikeysProjectsLocationsKeysCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keyId" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "keyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysProjectsLocationsKeysCreateQueryParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysCreateQueryParams };
var ApikeysProjectsLocationsKeysCreateSecurity = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysCreateSecurity, _super);
    function ApikeysProjectsLocationsKeysCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysCreateSecurity.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysCreateSecurity;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysCreateSecurity };
var ApikeysProjectsLocationsKeysCreateRequest = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysCreateRequest, _super);
    function ApikeysProjectsLocationsKeysCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysCreatePathParams)
    ], ApikeysProjectsLocationsKeysCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysCreateQueryParams)
    ], ApikeysProjectsLocationsKeysCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.V2Key)
    ], ApikeysProjectsLocationsKeysCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysCreateSecurity)
    ], ApikeysProjectsLocationsKeysCreateRequest.prototype, "security", void 0);
    return ApikeysProjectsLocationsKeysCreateRequest;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysCreateRequest };
var ApikeysProjectsLocationsKeysCreateResponse = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysCreateResponse, _super);
    function ApikeysProjectsLocationsKeysCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], ApikeysProjectsLocationsKeysCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysCreateResponse.prototype, "statusCode", void 0);
    return ApikeysProjectsLocationsKeysCreateResponse;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysCreateResponse };
