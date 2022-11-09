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
var GetaccesstokenIdRequestBody = /** @class */ (function (_super) {
    __extends(GetaccesstokenIdRequestBody, _super);
    function GetaccesstokenIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Get access token using authorization code" }),
        __metadata("design:type", shared.AccessToken)
    ], GetaccesstokenIdRequestBody.prototype, "getAccessTokenUsingAuthorizationCode", void 0);
    __decorate([
        Metadata({ data: "json, name=Get access token using device code and OTP" }),
        __metadata("design:type", Object)
    ], GetaccesstokenIdRequestBody.prototype, "getAccessTokenUsingDeviceCodeAndOtp", void 0);
    __decorate([
        Metadata({ data: "json, name=Get access token using refresh token" }),
        __metadata("design:type", shared.RefreshToken)
    ], GetaccesstokenIdRequestBody.prototype, "getAccessTokenUsingRefreshToken", void 0);
    return GetaccesstokenIdRequestBody;
}(SpeakeasyBase));
export { GetaccesstokenIdRequestBody };
var GetaccesstokenIdRequest = /** @class */ (function (_super) {
    __extends(GetaccesstokenIdRequest, _super);
    function GetaccesstokenIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetaccesstokenIdRequestBody)
    ], GetaccesstokenIdRequest.prototype, "request", void 0);
    return GetaccesstokenIdRequest;
}(SpeakeasyBase));
export { GetaccesstokenIdRequest };
var GetaccesstokenIdResponse = /** @class */ (function (_super) {
    __extends(GetaccesstokenIdResponse, _super);
    function GetaccesstokenIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccessResponse)
    ], GetaccesstokenIdResponse.prototype, "accessResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetaccesstokenIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetaccesstokenIdResponse.prototype, "statusCode", void 0);
    return GetaccesstokenIdResponse;
}(SpeakeasyBase));
export { GetaccesstokenIdResponse };
