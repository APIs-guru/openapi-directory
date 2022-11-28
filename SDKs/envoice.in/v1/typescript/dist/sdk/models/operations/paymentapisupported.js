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
var PaymentApiSupportedHeaders = /** @class */ (function (_super) {
    __extends(PaymentApiSupportedHeaders, _super);
    function PaymentApiSupportedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], PaymentApiSupportedHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], PaymentApiSupportedHeaders.prototype, "xAuthSecret", void 0);
    return PaymentApiSupportedHeaders;
}(SpeakeasyBase));
export { PaymentApiSupportedHeaders };
var PaymentApiSupportedRequest = /** @class */ (function (_super) {
    __extends(PaymentApiSupportedRequest, _super);
    function PaymentApiSupportedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentApiSupportedHeaders)
    ], PaymentApiSupportedRequest.prototype, "headers", void 0);
    return PaymentApiSupportedRequest;
}(SpeakeasyBase));
export { PaymentApiSupportedRequest };
var PaymentApiSupportedResponse = /** @class */ (function (_super) {
    __extends(PaymentApiSupportedResponse, _super);
    function PaymentApiSupportedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PaymentApiSupportedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PaymentApiSupportedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PaymentGatewayDetailsApiModel }),
        __metadata("design:type", Array)
    ], PaymentApiSupportedResponse.prototype, "paymentGatewayDetailsApiModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PaymentApiSupportedResponse.prototype, "statusCode", void 0);
    return PaymentApiSupportedResponse;
}(SpeakeasyBase));
export { PaymentApiSupportedResponse };
