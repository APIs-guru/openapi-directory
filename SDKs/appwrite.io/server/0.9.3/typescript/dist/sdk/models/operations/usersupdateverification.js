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
var UsersUpdateVerificationPathParams = /** @class */ (function (_super) {
    __extends(UsersUpdateVerificationPathParams, _super);
    function UsersUpdateVerificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UsersUpdateVerificationPathParams.prototype, "userId", void 0);
    return UsersUpdateVerificationPathParams;
}(SpeakeasyBase));
export { UsersUpdateVerificationPathParams };
var UsersUpdateVerificationRequestBody = /** @class */ (function (_super) {
    __extends(UsersUpdateVerificationRequestBody, _super);
    function UsersUpdateVerificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=emailVerification" }),
        __metadata("design:type", Boolean)
    ], UsersUpdateVerificationRequestBody.prototype, "emailVerification", void 0);
    return UsersUpdateVerificationRequestBody;
}(SpeakeasyBase));
export { UsersUpdateVerificationRequestBody };
var UsersUpdateVerificationSecurity = /** @class */ (function (_super) {
    __extends(UsersUpdateVerificationSecurity, _super);
    function UsersUpdateVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], UsersUpdateVerificationSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], UsersUpdateVerificationSecurity.prototype, "project", void 0);
    return UsersUpdateVerificationSecurity;
}(SpeakeasyBase));
export { UsersUpdateVerificationSecurity };
var UsersUpdateVerificationRequest = /** @class */ (function (_super) {
    __extends(UsersUpdateVerificationRequest, _super);
    function UsersUpdateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdateVerificationPathParams)
    ], UsersUpdateVerificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersUpdateVerificationRequestBody)
    ], UsersUpdateVerificationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdateVerificationSecurity)
    ], UsersUpdateVerificationRequest.prototype, "security", void 0);
    return UsersUpdateVerificationRequest;
}(SpeakeasyBase));
export { UsersUpdateVerificationRequest };
var UsersUpdateVerificationResponse = /** @class */ (function (_super) {
    __extends(UsersUpdateVerificationResponse, _super);
    function UsersUpdateVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UsersUpdateVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UsersUpdateVerificationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.User)
    ], UsersUpdateVerificationResponse.prototype, "user", void 0);
    return UsersUpdateVerificationResponse;
}(SpeakeasyBase));
export { UsersUpdateVerificationResponse };
