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
export var AuthenticateAuthenticationGrantTypeEnum;
(function (AuthenticateAuthenticationGrantTypeEnum) {
    AuthenticateAuthenticationGrantTypeEnum["AccessToken"] = "AccessToken";
})(AuthenticateAuthenticationGrantTypeEnum || (AuthenticateAuthenticationGrantTypeEnum = {}));
var AuthenticateAuthentication = /** @class */ (function (_super) {
    __extends(AuthenticateAuthentication, _super);
    function AuthenticateAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], AuthenticateAuthentication.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], AuthenticateAuthentication.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grantType" }),
        __metadata("design:type", String)
    ], AuthenticateAuthentication.prototype, "grantType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonce" }),
        __metadata("design:type", Number)
    ], AuthenticateAuthentication.prototype, "nonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshToken" }),
        __metadata("design:type", String)
    ], AuthenticateAuthentication.prototype, "refreshToken", void 0);
    return AuthenticateAuthentication;
}(SpeakeasyBase));
export { AuthenticateAuthentication };
var AuthenticateAccessToken = /** @class */ (function (_super) {
    __extends(AuthenticateAccessToken, _super);
    function AuthenticateAccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], AuthenticateAccessToken.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiApplicationId" }),
        __metadata("design:type", Number)
    ], AuthenticateAccessToken.prototype, "apiApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessId" }),
        __metadata("design:type", Number)
    ], AuthenticateAccessToken.prototype, "businessId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], AuthenticateAccessToken.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], AuthenticateAccessToken.prototype, "permissions", void 0);
    return AuthenticateAccessToken;
}(SpeakeasyBase));
export { AuthenticateAccessToken };
var AuthenticateRequest = /** @class */ (function (_super) {
    __extends(AuthenticateRequest, _super);
    function AuthenticateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AuthenticateAuthentication)
    ], AuthenticateRequest.prototype, "request", void 0);
    return AuthenticateRequest;
}(SpeakeasyBase));
export { AuthenticateRequest };
var AuthenticateResponse = /** @class */ (function (_super) {
    __extends(AuthenticateResponse, _super);
    function AuthenticateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateAccessToken)
    ], AuthenticateResponse.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthenticateResponse.prototype, "statusCode", void 0);
    return AuthenticateResponse;
}(SpeakeasyBase));
export { AuthenticateResponse };
