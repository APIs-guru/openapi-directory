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
var VerifyEmailQueryParams = /** @class */ (function (_super) {
    __extends(VerifyEmailQueryParams, _super);
    function VerifyEmailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], VerifyEmailQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], VerifyEmailQueryParams.prototype, "lang", void 0);
    return VerifyEmailQueryParams;
}(SpeakeasyBase));
export { VerifyEmailQueryParams };
var VerifyEmailSecurity = /** @class */ (function (_super) {
    __extends(VerifyEmailSecurity, _super);
    function VerifyEmailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeVerifyEmailAuth)
    ], VerifyEmailSecurity.prototype, "verifyEmailAuth", void 0);
    return VerifyEmailSecurity;
}(SpeakeasyBase));
export { VerifyEmailSecurity };
var VerifyEmailRequest = /** @class */ (function (_super) {
    __extends(VerifyEmailRequest, _super);
    function VerifyEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VerifyEmailQueryParams)
    ], VerifyEmailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VerifyEmailSecurity)
    ], VerifyEmailRequest.prototype, "security", void 0);
    return VerifyEmailRequest;
}(SpeakeasyBase));
export { VerifyEmailRequest };
var VerifyEmailResponse = /** @class */ (function (_super) {
    __extends(VerifyEmailResponse, _super);
    function VerifyEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VerifyEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], VerifyEmailResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VerifyEmailResponse.prototype, "statusCode", void 0);
    return VerifyEmailResponse;
}(SpeakeasyBase));
export { VerifyEmailResponse };
