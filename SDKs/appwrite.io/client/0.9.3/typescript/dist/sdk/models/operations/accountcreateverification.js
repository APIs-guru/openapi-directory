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
var AccountCreateVerificationRequestBody = /** @class */ (function (_super) {
    __extends(AccountCreateVerificationRequestBody, _super);
    function AccountCreateVerificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AccountCreateVerificationRequestBody.prototype, "url", void 0);
    return AccountCreateVerificationRequestBody;
}(SpeakeasyBase));
export { AccountCreateVerificationRequestBody };
var AccountCreateVerificationSecurity = /** @class */ (function (_super) {
    __extends(AccountCreateVerificationSecurity, _super);
    function AccountCreateVerificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AccountCreateVerificationSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountCreateVerificationSecurity.prototype, "project", void 0);
    return AccountCreateVerificationSecurity;
}(SpeakeasyBase));
export { AccountCreateVerificationSecurity };
var AccountCreateVerificationRequest = /** @class */ (function (_super) {
    __extends(AccountCreateVerificationRequest, _super);
    function AccountCreateVerificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountCreateVerificationRequestBody)
    ], AccountCreateVerificationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCreateVerificationSecurity)
    ], AccountCreateVerificationRequest.prototype, "security", void 0);
    return AccountCreateVerificationRequest;
}(SpeakeasyBase));
export { AccountCreateVerificationRequest };
var AccountCreateVerificationResponse = /** @class */ (function (_super) {
    __extends(AccountCreateVerificationResponse, _super);
    function AccountCreateVerificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountCreateVerificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountCreateVerificationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Token)
    ], AccountCreateVerificationResponse.prototype, "token", void 0);
    return AccountCreateVerificationResponse;
}(SpeakeasyBase));
export { AccountCreateVerificationResponse };
