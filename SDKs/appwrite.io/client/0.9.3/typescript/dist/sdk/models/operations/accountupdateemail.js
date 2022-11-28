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
var AccountUpdateEmailRequestBody = /** @class */ (function (_super) {
    __extends(AccountUpdateEmailRequestBody, _super);
    function AccountUpdateEmailRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountUpdateEmailRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AccountUpdateEmailRequestBody.prototype, "password", void 0);
    return AccountUpdateEmailRequestBody;
}(SpeakeasyBase));
export { AccountUpdateEmailRequestBody };
var AccountUpdateEmailSecurity = /** @class */ (function (_super) {
    __extends(AccountUpdateEmailSecurity, _super);
    function AccountUpdateEmailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], AccountUpdateEmailSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountUpdateEmailSecurity.prototype, "project", void 0);
    return AccountUpdateEmailSecurity;
}(SpeakeasyBase));
export { AccountUpdateEmailSecurity };
var AccountUpdateEmailRequest = /** @class */ (function (_super) {
    __extends(AccountUpdateEmailRequest, _super);
    function AccountUpdateEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountUpdateEmailRequestBody)
    ], AccountUpdateEmailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountUpdateEmailSecurity)
    ], AccountUpdateEmailRequest.prototype, "security", void 0);
    return AccountUpdateEmailRequest;
}(SpeakeasyBase));
export { AccountUpdateEmailRequest };
var AccountUpdateEmailResponse = /** @class */ (function (_super) {
    __extends(AccountUpdateEmailResponse, _super);
    function AccountUpdateEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountUpdateEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountUpdateEmailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], AccountUpdateEmailResponse.prototype, "user", void 0);
    return AccountUpdateEmailResponse;
}(SpeakeasyBase));
export { AccountUpdateEmailResponse };
