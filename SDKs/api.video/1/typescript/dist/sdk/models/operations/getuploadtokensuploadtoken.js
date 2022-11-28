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
var GetUploadTokensUploadTokenPathParams = /** @class */ (function (_super) {
    __extends(GetUploadTokensUploadTokenPathParams, _super);
    function GetUploadTokensUploadTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadToken" }),
        __metadata("design:type", String)
    ], GetUploadTokensUploadTokenPathParams.prototype, "uploadToken", void 0);
    return GetUploadTokensUploadTokenPathParams;
}(SpeakeasyBase));
export { GetUploadTokensUploadTokenPathParams };
var GetUploadTokensUploadTokenSecurity = /** @class */ (function (_super) {
    __extends(GetUploadTokensUploadTokenSecurity, _super);
    function GetUploadTokensUploadTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetUploadTokensUploadTokenSecurity.prototype, "bearerAuth", void 0);
    return GetUploadTokensUploadTokenSecurity;
}(SpeakeasyBase));
export { GetUploadTokensUploadTokenSecurity };
var GetUploadTokensUploadTokenRequest = /** @class */ (function (_super) {
    __extends(GetUploadTokensUploadTokenRequest, _super);
    function GetUploadTokensUploadTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUploadTokensUploadTokenPathParams)
    ], GetUploadTokensUploadTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUploadTokensUploadTokenSecurity)
    ], GetUploadTokensUploadTokenRequest.prototype, "security", void 0);
    return GetUploadTokensUploadTokenRequest;
}(SpeakeasyBase));
export { GetUploadTokensUploadTokenRequest };
var GetUploadTokensUploadTokenResponse = /** @class */ (function (_super) {
    __extends(GetUploadTokensUploadTokenResponse, _super);
    function GetUploadTokensUploadTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUploadTokensUploadTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUploadTokensUploadTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetUploadTokensUploadTokenResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadToken)
    ], GetUploadTokensUploadTokenResponse.prototype, "uploadToken", void 0);
    return GetUploadTokensUploadTokenResponse;
}(SpeakeasyBase));
export { GetUploadTokensUploadTokenResponse };
