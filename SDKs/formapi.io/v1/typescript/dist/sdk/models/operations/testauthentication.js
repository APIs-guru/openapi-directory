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
var TestAuthenticationSecurity = /** @class */ (function (_super) {
    __extends(TestAuthenticationSecurity, _super);
    function TestAuthenticationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], TestAuthenticationSecurity.prototype, "apiTokenBasic", void 0);
    return TestAuthenticationSecurity;
}(SpeakeasyBase));
export { TestAuthenticationSecurity };
export var TestAuthenticationAuthenticationSuccessResponseStatusEnum;
(function (TestAuthenticationAuthenticationSuccessResponseStatusEnum) {
    TestAuthenticationAuthenticationSuccessResponseStatusEnum["Success"] = "success";
})(TestAuthenticationAuthenticationSuccessResponseStatusEnum || (TestAuthenticationAuthenticationSuccessResponseStatusEnum = {}));
var TestAuthenticationAuthenticationSuccessResponse = /** @class */ (function (_super) {
    __extends(TestAuthenticationAuthenticationSuccessResponse, _super);
    function TestAuthenticationAuthenticationSuccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TestAuthenticationAuthenticationSuccessResponse.prototype, "status", void 0);
    return TestAuthenticationAuthenticationSuccessResponse;
}(SpeakeasyBase));
export { TestAuthenticationAuthenticationSuccessResponse };
var TestAuthenticationRequest = /** @class */ (function (_super) {
    __extends(TestAuthenticationRequest, _super);
    function TestAuthenticationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestAuthenticationSecurity)
    ], TestAuthenticationRequest.prototype, "security", void 0);
    return TestAuthenticationRequest;
}(SpeakeasyBase));
export { TestAuthenticationRequest };
var TestAuthenticationResponse = /** @class */ (function (_super) {
    __extends(TestAuthenticationResponse, _super);
    function TestAuthenticationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestAuthenticationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestAuthenticationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], TestAuthenticationResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestAuthenticationAuthenticationSuccessResponse)
    ], TestAuthenticationResponse.prototype, "authenticationSuccessResponse", void 0);
    return TestAuthenticationResponse;
}(SpeakeasyBase));
export { TestAuthenticationResponse };
