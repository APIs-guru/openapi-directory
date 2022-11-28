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
var GetPaymentsProgramOnboardingPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentsProgramOnboardingPathParams, _super);
    function GetPaymentsProgramOnboardingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetPaymentsProgramOnboardingPathParams.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payments_program_type" }),
        __metadata("design:type", String)
    ], GetPaymentsProgramOnboardingPathParams.prototype, "paymentsProgramType", void 0);
    return GetPaymentsProgramOnboardingPathParams;
}(SpeakeasyBase));
export { GetPaymentsProgramOnboardingPathParams };
var GetPaymentsProgramOnboardingSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentsProgramOnboardingSecurity, _super);
    function GetPaymentsProgramOnboardingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetPaymentsProgramOnboardingSecurity.prototype, "apiAuth", void 0);
    return GetPaymentsProgramOnboardingSecurity;
}(SpeakeasyBase));
export { GetPaymentsProgramOnboardingSecurity };
var GetPaymentsProgramOnboardingRequest = /** @class */ (function (_super) {
    __extends(GetPaymentsProgramOnboardingRequest, _super);
    function GetPaymentsProgramOnboardingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsProgramOnboardingPathParams)
    ], GetPaymentsProgramOnboardingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsProgramOnboardingSecurity)
    ], GetPaymentsProgramOnboardingRequest.prototype, "security", void 0);
    return GetPaymentsProgramOnboardingRequest;
}(SpeakeasyBase));
export { GetPaymentsProgramOnboardingRequest };
var GetPaymentsProgramOnboardingResponse = /** @class */ (function (_super) {
    __extends(GetPaymentsProgramOnboardingResponse, _super);
    function GetPaymentsProgramOnboardingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentsProgramOnboardingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentsProgramOnboardingResponse)
    ], GetPaymentsProgramOnboardingResponse.prototype, "paymentsProgramOnboardingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentsProgramOnboardingResponse.prototype, "statusCode", void 0);
    return GetPaymentsProgramOnboardingResponse;
}(SpeakeasyBase));
export { GetPaymentsProgramOnboardingResponse };
