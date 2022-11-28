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
var GetAccessTokenQueryParams = /** @class */ (function (_super) {
    __extends(GetAccessTokenQueryParams, _super);
    function GetAccessTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_consumer_key" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthConsumerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_nonce" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthNonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_signature" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_signature_method" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthSignatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_timestamp" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_verifier" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthVerifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_version" }),
        __metadata("design:type", String)
    ], GetAccessTokenQueryParams.prototype, "oauthVersion", void 0);
    return GetAccessTokenQueryParams;
}(SpeakeasyBase));
export { GetAccessTokenQueryParams };
var GetAccessTokenRequest = /** @class */ (function (_super) {
    __extends(GetAccessTokenRequest, _super);
    function GetAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccessTokenQueryParams)
    ], GetAccessTokenRequest.prototype, "queryParams", void 0);
    return GetAccessTokenRequest;
}(SpeakeasyBase));
export { GetAccessTokenRequest };
var GetAccessTokenResponse = /** @class */ (function (_super) {
    __extends(GetAccessTokenResponse, _super);
    function GetAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccessTokenResponse.prototype, "getAccessToken200ApplicationJsonString", void 0);
    return GetAccessTokenResponse;
}(SpeakeasyBase));
export { GetAccessTokenResponse };
