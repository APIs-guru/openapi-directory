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
var GetAuthorizationCodeIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizationCodeIdQueryParams, _super);
    function GetAuthorizationCodeIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Code_challenge" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "codeChallenge", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Code_challenge_method" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "codeChallengeMethod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Verified_mobile" }),
        __metadata("design:type", Number)
    ], GetAuthorizationCodeIdQueryParams.prototype, "verifiedMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=client_id" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dl_flow" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "dlFlow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "redirectUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=response_type" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "responseType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdQueryParams.prototype, "state", void 0);
    return GetAuthorizationCodeIdQueryParams;
}(SpeakeasyBase));
export { GetAuthorizationCodeIdQueryParams };
var GetAuthorizationCodeIdSecurity = /** @class */ (function (_super) {
    __extends(GetAuthorizationCodeIdSecurity, _super);
    function GetAuthorizationCodeIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthAuthorizeCode)
    ], GetAuthorizationCodeIdSecurity.prototype, "oauthAuthorizeCode", void 0);
    return GetAuthorizationCodeIdSecurity;
}(SpeakeasyBase));
export { GetAuthorizationCodeIdSecurity };
var GetAuthorizationCodeIdRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizationCodeIdRequest, _super);
    function GetAuthorizationCodeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizationCodeIdQueryParams)
    ], GetAuthorizationCodeIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizationCodeIdSecurity)
    ], GetAuthorizationCodeIdRequest.prototype, "security", void 0);
    return GetAuthorizationCodeIdRequest;
}(SpeakeasyBase));
export { GetAuthorizationCodeIdRequest };
var GetAuthorizationCodeIdResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizationCodeIdResponse, _super);
    function GetAuthorizationCodeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAuthorizationCodeIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAuthorizationCodeIdResponse.prototype, "sample", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAuthorizationCodeIdResponse.prototype, "statusCode", void 0);
    return GetAuthorizationCodeIdResponse;
}(SpeakeasyBase));
export { GetAuthorizationCodeIdResponse };
