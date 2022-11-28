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
export var PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
(function (PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum) {
    PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum["Password"] = "password";
    PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum["RefreshToken"] = "refresh_token";
})(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum || (PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = {}));
export var PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
(function (PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum) {
    PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum["Oms"] = "oms";
})(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum || (PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = {}));
var PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2, _super);
    function PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_type" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "grantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2.prototype, "username", void 0);
    return PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2;
}(SpeakeasyBase));
export { PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 };
var PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3, _super);
    function PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_type" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3.prototype, "grantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3.prototype, "refreshToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3.prototype, "scope", void 0);
    return PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3;
}(SpeakeasyBase));
export { PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 };
var PostOauthAccessTokenAccessTokenResponseV2 = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenAccessTokenResponseV2, _super);
    function PostOauthAccessTokenAccessTokenResponseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenAccessTokenResponseV2.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], PostOauthAccessTokenAccessTokenResponseV2.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenAccessTokenResponseV2.prototype, "refreshToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_type" }),
        __metadata("design:type", String)
    ], PostOauthAccessTokenAccessTokenResponseV2.prototype, "tokenType", void 0);
    return PostOauthAccessTokenAccessTokenResponseV2;
}(SpeakeasyBase));
export { PostOauthAccessTokenAccessTokenResponseV2 };
var PostOauthAccessTokenRequest = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenRequest, _super);
    function PostOauthAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostOauthAccessTokenRequest.prototype, "request", void 0);
    return PostOauthAccessTokenRequest;
}(SpeakeasyBase));
export { PostOauthAccessTokenRequest };
var PostOauthAccessTokenResponse = /** @class */ (function (_super) {
    __extends(PostOauthAccessTokenResponse, _super);
    function PostOauthAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOauthAccessTokenAccessTokenResponseV2)
    ], PostOauthAccessTokenResponse.prototype, "accessTokenResponseV2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOauthAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOauthAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneordersGetResponses404ContentApplication1jsonSchema)
    ], PostOauthAccessTokenResponse.prototype, "oneordersGetResponses404ContentApplication1jsonSchema", void 0);
    return PostOauthAccessTokenResponse;
}(SpeakeasyBase));
export { PostOauthAccessTokenResponse };
