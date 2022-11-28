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
var GetDeviceCodeIdSecurity = /** @class */ (function (_super) {
    __extends(GetDeviceCodeIdSecurity, _super);
    function GetDeviceCodeIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetDeviceCodeIdSecurity.prototype, "oauthsecurity", void 0);
    return GetDeviceCodeIdSecurity;
}(SpeakeasyBase));
export { GetDeviceCodeIdSecurity };
var GetDeviceCodeId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDeviceCodeId401ApplicationJson, _super);
    function GetDeviceCodeId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetDeviceCodeId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetDeviceCodeId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetDeviceCodeId401ApplicationJson;
}(SpeakeasyBase));
export { GetDeviceCodeId401ApplicationJson };
var GetDeviceCodeIdRequest = /** @class */ (function (_super) {
    __extends(GetDeviceCodeIdRequest, _super);
    function GetDeviceCodeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], GetDeviceCodeIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCodeIdSecurity)
    ], GetDeviceCodeIdRequest.prototype, "security", void 0);
    return GetDeviceCodeIdRequest;
}(SpeakeasyBase));
export { GetDeviceCodeIdRequest };
var GetDeviceCodeIdResponse = /** @class */ (function (_super) {
    __extends(GetDeviceCodeIdResponse, _super);
    function GetDeviceCodeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceCodeIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceAuthorizationCodeResponse)
    ], GetDeviceCodeIdResponse.prototype, "deviceAuthorizationCodeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDeviceCodeIdResponse.prototype, "getDeviceCodeId400ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceCodeId401ApplicationJson)
    ], GetDeviceCodeIdResponse.prototype, "getDeviceCodeId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDeviceCodeIdResponse.prototype, "getDeviceCodeId500ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceCodeIdResponse.prototype, "statusCode", void 0);
    return GetDeviceCodeIdResponse;
}(SpeakeasyBase));
export { GetDeviceCodeIdResponse };
