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
export var AcceptPaymentDisputeServerList = [
    "https://apiz.ebay.com{basePath}",
];
var AcceptPaymentDisputePathParams = /** @class */ (function (_super) {
    __extends(AcceptPaymentDisputePathParams, _super);
    function AcceptPaymentDisputePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" }),
        __metadata("design:type", String)
    ], AcceptPaymentDisputePathParams.prototype, "paymentDisputeId", void 0);
    return AcceptPaymentDisputePathParams;
}(SpeakeasyBase));
export { AcceptPaymentDisputePathParams };
var AcceptPaymentDisputeSecurity = /** @class */ (function (_super) {
    __extends(AcceptPaymentDisputeSecurity, _super);
    function AcceptPaymentDisputeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], AcceptPaymentDisputeSecurity.prototype, "apiAuth", void 0);
    return AcceptPaymentDisputeSecurity;
}(SpeakeasyBase));
export { AcceptPaymentDisputeSecurity };
var AcceptPaymentDisputeRequest = /** @class */ (function (_super) {
    __extends(AcceptPaymentDisputeRequest, _super);
    function AcceptPaymentDisputeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptPaymentDisputeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptPaymentDisputePathParams)
    ], AcceptPaymentDisputeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcceptPaymentDisputeRequest)
    ], AcceptPaymentDisputeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptPaymentDisputeSecurity)
    ], AcceptPaymentDisputeRequest.prototype, "security", void 0);
    return AcceptPaymentDisputeRequest;
}(SpeakeasyBase));
export { AcceptPaymentDisputeRequest };
var AcceptPaymentDisputeResponse = /** @class */ (function (_super) {
    __extends(AcceptPaymentDisputeResponse, _super);
    function AcceptPaymentDisputeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptPaymentDisputeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptPaymentDisputeResponse.prototype, "statusCode", void 0);
    return AcceptPaymentDisputeResponse;
}(SpeakeasyBase));
export { AcceptPaymentDisputeResponse };
