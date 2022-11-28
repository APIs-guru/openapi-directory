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
var OauthAuthorizationsResetAuthorizationPathParams = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsResetAuthorizationPathParams, _super);
    function OauthAuthorizationsResetAuthorizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsResetAuthorizationPathParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], OauthAuthorizationsResetAuthorizationPathParams.prototype, "clientId", void 0);
    return OauthAuthorizationsResetAuthorizationPathParams;
}(SpeakeasyBase));
export { OauthAuthorizationsResetAuthorizationPathParams };
var OauthAuthorizationsResetAuthorizationRequest = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsResetAuthorizationRequest, _super);
    function OauthAuthorizationsResetAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OauthAuthorizationsResetAuthorizationPathParams)
    ], OauthAuthorizationsResetAuthorizationRequest.prototype, "pathParams", void 0);
    return OauthAuthorizationsResetAuthorizationRequest;
}(SpeakeasyBase));
export { OauthAuthorizationsResetAuthorizationRequest };
var OauthAuthorizationsResetAuthorizationResponse = /** @class */ (function (_super) {
    __extends(OauthAuthorizationsResetAuthorizationResponse, _super);
    function OauthAuthorizationsResetAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OauthAuthorizationsResetAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OauthAuthorizationsResetAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizationWithUser)
    ], OauthAuthorizationsResetAuthorizationResponse.prototype, "authorizationWithUser", void 0);
    return OauthAuthorizationsResetAuthorizationResponse;
}(SpeakeasyBase));
export { OauthAuthorizationsResetAuthorizationResponse };
