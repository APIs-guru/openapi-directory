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
var OauthAuthorizationsCheckAuthorizationPathParams = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCheckAuthorizationPathParams, _super);
    function OauthAuthorizationsCheckAuthorizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCheckAuthorizationPathParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsCheckAuthorizationPathParams.prototype, "clientId", void 0);
    return OauthAuthorizationsCheckAuthorizationPathParams;
}(SpeakeasyBase));
export { OauthAuthorizationsCheckAuthorizationPathParams };
var OauthAuthorizationsCheckAuthorizationRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCheckAuthorizationRequest, _super);
    function OauthAuthorizationsCheckAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OauthAuthorizationsCheckAuthorizationPathParams)
    ], OauthAuthorizationsCheckAuthorizationRequest.prototype, "pathParams", void 0);
    return OauthAuthorizationsCheckAuthorizationRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsCheckAuthorizationRequest };
var OauthAuthorizationsCheckAuthorizationResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsCheckAuthorizationResponse, _super);
    function OauthAuthorizationsCheckAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsCheckAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsCheckAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizationWithUser)
    ], OauthAuthorizationsCheckAuthorizationResponse.prototype, "authorizationWithUser", void 0);
    return OauthAuthorizationsCheckAuthorizationResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsCheckAuthorizationResponse };
