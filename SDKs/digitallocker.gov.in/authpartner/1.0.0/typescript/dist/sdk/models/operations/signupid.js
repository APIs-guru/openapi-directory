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
var SignUpIdSecurity = /** @class */ (function (_super) {
    __extends(SignUpIdSecurity, _super);
    function SignUpIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], SignUpIdSecurity.prototype, "oauthsecurity", void 0);
    return SignUpIdSecurity;
}(SpeakeasyBase));
export { SignUpIdSecurity };
var SignUpIdRequest = /** @class */ (function (_super) {
    __extends(SignUpIdRequest, _super);
    function SignUpIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], SignUpIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SignUpIdSecurity)
    ], SignUpIdRequest.prototype, "security", void 0);
    return SignUpIdRequest;
}(SpeakeasyBase));
export { SignUpIdRequest };
var SignUpId401ApplicationJson = /** @class */ (function (_super) {
    __extends(SignUpId401ApplicationJson, _super);
    function SignUpId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], SignUpId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], SignUpId401ApplicationJson.prototype, "errorDescription", void 0);
    return SignUpId401ApplicationJson;
}(SpeakeasyBase));
export { SignUpId401ApplicationJson };
var SignUpId500ApplicationJson = /** @class */ (function (_super) {
    __extends(SignUpId500ApplicationJson, _super);
    function SignUpId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], SignUpId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], SignUpId500ApplicationJson.prototype, "errorDescription", void 0);
    return SignUpId500ApplicationJson;
}(SpeakeasyBase));
export { SignUpId500ApplicationJson };
var SignUpIdResponse = /** @class */ (function (_super) {
    __extends(SignUpIdResponse, _super);
    function SignUpIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SignUpIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SignUpIdResponse.prototype, "demoAuthResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SignUpIdResponse.prototype, "signUpId400ApplicationJsonOneOf", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SignUpId401ApplicationJson)
    ], SignUpIdResponse.prototype, "signUpId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SignUpId500ApplicationJson)
    ], SignUpIdResponse.prototype, "signUpId500ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SignUpIdResponse.prototype, "statusCode", void 0);
    return SignUpIdResponse;
}(SpeakeasyBase));
export { SignUpIdResponse };
