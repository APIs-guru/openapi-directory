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
export var GetTokenRevocationIdRequestBodyTokenTypeHintEnum;
(function (GetTokenRevocationIdRequestBodyTokenTypeHintEnum) {
    GetTokenRevocationIdRequestBodyTokenTypeHintEnum["RefreshToken"] = "refresh_token";
    GetTokenRevocationIdRequestBodyTokenTypeHintEnum["AccessToken"] = "access_token";
})(GetTokenRevocationIdRequestBodyTokenTypeHintEnum || (GetTokenRevocationIdRequestBodyTokenTypeHintEnum = {}));
var GetTokenRevocationIdRequestBody = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdRequestBody, _super);
    function GetTokenRevocationIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], GetTokenRevocationIdRequestBody.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "json, name=token_type_hint" }),
        __metadata("design:type", String)
    ], GetTokenRevocationIdRequestBody.prototype, "tokenTypeHint", void 0);
    return GetTokenRevocationIdRequestBody;
}(SpeakeasyBase));
export { GetTokenRevocationIdRequestBody };
var GetTokenRevocationIdSecurity = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdSecurity, _super);
    function GetTokenRevocationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetTokenRevocationIdSecurity.prototype, "oauthsecurity", void 0);
    return GetTokenRevocationIdSecurity;
}(SpeakeasyBase));
export { GetTokenRevocationIdSecurity };
var GetTokenRevocationIdRequest = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdRequest, _super);
    function GetTokenRevocationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTokenRevocationIdRequestBody)
    ], GetTokenRevocationIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTokenRevocationIdSecurity)
    ], GetTokenRevocationIdRequest.prototype, "security", void 0);
    return GetTokenRevocationIdRequest;
}(SpeakeasyBase));
export { GetTokenRevocationIdRequest };
var GetTokenRevocationIdResponse = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdResponse, _super);
    function GetTokenRevocationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTokenRevocationIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTokenRevocationIdResponse.prototype, "statusCode", void 0);
    return GetTokenRevocationIdResponse;
}(SpeakeasyBase));
export { GetTokenRevocationIdResponse };
