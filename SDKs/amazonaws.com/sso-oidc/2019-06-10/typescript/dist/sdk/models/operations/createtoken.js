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
var CreateTokenHeaders = /** @class */ (function (_super) {
    __extends(CreateTokenHeaders, _super);
    function CreateTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTokenHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateTokenHeaders;
}(SpeakeasyBase));
export { CreateTokenHeaders };
var CreateTokenRequestBody = /** @class */ (function (_super) {
    __extends(CreateTokenRequestBody, _super);
    function CreateTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "clientSecret", void 0);
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceCode" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "deviceCode", void 0);
    __decorate([
        Metadata({ data: "json, name=grantType" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "grantType", void 0);
    __decorate([
        Metadata({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "json, name=refreshToken" }),
        __metadata("design:type", String)
    ], CreateTokenRequestBody.prototype, "refreshToken", void 0);
    __decorate([
        Metadata({ data: "json, name=scope" }),
        __metadata("design:type", Array)
    ], CreateTokenRequestBody.prototype, "scope", void 0);
    return CreateTokenRequestBody;
}(SpeakeasyBase));
export { CreateTokenRequestBody };
var CreateTokenRequest = /** @class */ (function (_super) {
    __extends(CreateTokenRequest, _super);
    function CreateTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTokenHeaders)
    ], CreateTokenRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTokenRequestBody)
    ], CreateTokenRequest.prototype, "request", void 0);
    return CreateTokenRequest;
}(SpeakeasyBase));
export { CreateTokenRequest };
var CreateTokenResponse = /** @class */ (function (_super) {
    __extends(CreateTokenResponse, _super);
    function CreateTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "authorizationPendingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateTokenResponse)
    ], CreateTokenResponse.prototype, "createTokenResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "expiredTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "invalidClientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "invalidGrantException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "invalidScopeException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "slowDownException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "unauthorizedClientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateTokenResponse.prototype, "unsupportedGrantTypeException", void 0);
    return CreateTokenResponse;
}(SpeakeasyBase));
export { CreateTokenResponse };
