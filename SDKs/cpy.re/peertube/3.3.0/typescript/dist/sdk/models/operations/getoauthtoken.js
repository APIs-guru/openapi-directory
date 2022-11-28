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
var GetOAuthToken200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetOAuthToken200ApplicationJson, _super);
    function GetOAuthToken200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], GetOAuthToken200ApplicationJson.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], GetOAuthToken200ApplicationJson.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_token" }),
        __metadata("design:type", String)
    ], GetOAuthToken200ApplicationJson.prototype, "refreshToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_token_expires_in" }),
        __metadata("design:type", Number)
    ], GetOAuthToken200ApplicationJson.prototype, "refreshTokenExpiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_type" }),
        __metadata("design:type", String)
    ], GetOAuthToken200ApplicationJson.prototype, "tokenType", void 0);
    return GetOAuthToken200ApplicationJson;
}(SpeakeasyBase));
export { GetOAuthToken200ApplicationJson };
var GetOAuthTokenRequest = /** @class */ (function (_super) {
    __extends(GetOAuthTokenRequest, _super);
    function GetOAuthTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetOAuthTokenRequest.prototype, "request", void 0);
    return GetOAuthTokenRequest;
}(SpeakeasyBase));
export { GetOAuthTokenRequest };
var GetOAuthTokenResponse = /** @class */ (function (_super) {
    __extends(GetOAuthTokenResponse, _super);
    function GetOAuthTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOAuthTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOAuthTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOAuthToken200ApplicationJson)
    ], GetOAuthTokenResponse.prototype, "getOAuthToken200ApplicationJsonObject", void 0);
    return GetOAuthTokenResponse;
}(SpeakeasyBase));
export { GetOAuthTokenResponse };
