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
export var GetPaymentDisputeServerList = [
    "https://apiz.ebay.com{basePath}",
];
var GetPaymentDisputePathParams = /** @class */ (function (_super) {
    __extends(GetPaymentDisputePathParams, _super);
    function GetPaymentDisputePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], GetPaymentDisputePathParams.prototype, "paymentDisputeId", void 0);
    return GetPaymentDisputePathParams;
}(SpeakeasyBase));
export { GetPaymentDisputePathParams };
var GetPaymentDisputeSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeSecurity, _super);
    function GetPaymentDisputeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetPaymentDisputeSecurity.prototype, "apiAuth", void 0);
    return GetPaymentDisputeSecurity;
}(SpeakeasyBase));
export { GetPaymentDisputeSecurity };
var GetPaymentDisputeRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeRequest, _super);
    function GetPaymentDisputeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDisputeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDisputePathParams)
    ], GetPaymentDisputeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDisputeSecurity)
    ], GetPaymentDisputeRequest.prototype, "security", void 0);
    return GetPaymentDisputeRequest;
}(SpeakeasyBase));
export { GetPaymentDisputeRequest };
var GetPaymentDisputeResponse = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeResponse, _super);
    function GetPaymentDisputeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDisputeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentDispute)
    ], GetPaymentDisputeResponse.prototype, "paymentDispute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentDisputeResponse.prototype, "statusCode", void 0);
    return GetPaymentDisputeResponse;
}(SpeakeasyBase));
export { GetPaymentDisputeResponse };
