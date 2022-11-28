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
var ApikeysProjectsLocationsKeysDeletePathParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysDeletePathParams, _super);
    function ApikeysProjectsLocationsKeysDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeletePathParams.prototype, "name", void 0);
    return ApikeysProjectsLocationsKeysDeletePathParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysDeletePathParams };
var ApikeysProjectsLocationsKeysDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysDeleteQueryParams, _super);
    function ApikeysProjectsLocationsKeysDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ApikeysProjectsLocationsKeysDeleteQueryParams;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysDeleteQueryParams };
var ApikeysProjectsLocationsKeysDeleteSecurity = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysDeleteSecurity, _super);
    function ApikeysProjectsLocationsKeysDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApikeysProjectsLocationsKeysDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApikeysProjectsLocationsKeysDeleteSecurity.prototype, "oauth2c", void 0);
    return ApikeysProjectsLocationsKeysDeleteSecurity;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysDeleteSecurity };
var ApikeysProjectsLocationsKeysDeleteRequest = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysDeleteRequest, _super);
    function ApikeysProjectsLocationsKeysDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysDeletePathParams)
    ], ApikeysProjectsLocationsKeysDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysDeleteQueryParams)
    ], ApikeysProjectsLocationsKeysDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApikeysProjectsLocationsKeysDeleteSecurity)
    ], ApikeysProjectsLocationsKeysDeleteRequest.prototype, "security", void 0);
    return ApikeysProjectsLocationsKeysDeleteRequest;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysDeleteRequest };
var ApikeysProjectsLocationsKeysDeleteResponse = /** @class */ (function (_super) {
    __extends(ApikeysProjectsLocationsKeysDeleteResponse, _super);
    function ApikeysProjectsLocationsKeysDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApikeysProjectsLocationsKeysDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ApikeysProjectsLocationsKeysDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApikeysProjectsLocationsKeysDeleteResponse.prototype, "statusCode", void 0);
    return ApikeysProjectsLocationsKeysDeleteResponse;
}(SpeakeasyBase));
export { ApikeysProjectsLocationsKeysDeleteResponse };
