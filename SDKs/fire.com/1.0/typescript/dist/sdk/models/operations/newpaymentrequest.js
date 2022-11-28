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
export var NewPaymentRequestNewPaymentRequestCurrencyEnum;
(function (NewPaymentRequestNewPaymentRequestCurrencyEnum) {
    NewPaymentRequestNewPaymentRequestCurrencyEnum["Eur"] = "EUR";
    NewPaymentRequestNewPaymentRequestCurrencyEnum["Gbp"] = "GBP";
})(NewPaymentRequestNewPaymentRequestCurrencyEnum || (NewPaymentRequestNewPaymentRequestCurrencyEnum = {}));
var NewPaymentRequestNewPaymentRequestOrderDetails = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequestOrderDetails, _super);
    function NewPaymentRequestNewPaymentRequestOrderDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment1" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "comment1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment2" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "comment2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerNumber" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "customerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryAddressLine1" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryAddressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryAddressLine2" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryAddressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCity" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCountry" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPostCode" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryPostCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantCustomerIdentification" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "merchantCustomerIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantNumber" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "merchantNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableReference" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "variableReference", void 0);
    return NewPaymentRequestNewPaymentRequestOrderDetails;
}(SpeakeasyBase));
export { NewPaymentRequestNewPaymentRequestOrderDetails };
export var NewPaymentRequestNewPaymentRequestTypeEnum;
(function (NewPaymentRequestNewPaymentRequestTypeEnum) {
    NewPaymentRequestNewPaymentRequestTypeEnum["Other"] = "OTHER";
})(NewPaymentRequestNewPaymentRequestTypeEnum || (NewPaymentRequestNewPaymentRequestTypeEnum = {}));
var NewPaymentRequestNewPaymentRequest = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequest, _super);
    function NewPaymentRequestNewPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "additionalFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "collectFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], NewPaymentRequestNewPaymentRequest.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandatoryFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "mandatoryFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxNumberPayments" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "maxNumberPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderDetails" }),
        __metadata("design:type", NewPaymentRequestNewPaymentRequestOrderDetails)
    ], NewPaymentRequestNewPaymentRequest.prototype, "orderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnUrl" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "returnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "type", void 0);
    return NewPaymentRequestNewPaymentRequest;
}(SpeakeasyBase));
export { NewPaymentRequestNewPaymentRequest };
export var NewPaymentRequestNewPaymentRequestResponseTypeEnum;
(function (NewPaymentRequestNewPaymentRequestResponseTypeEnum) {
    NewPaymentRequestNewPaymentRequestResponseTypeEnum["Other"] = "OTHER";
})(NewPaymentRequestNewPaymentRequestResponseTypeEnum || (NewPaymentRequestNewPaymentRequestResponseTypeEnum = {}));
var NewPaymentRequestNewPaymentRequestResponse = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequestResponse, _super);
    function NewPaymentRequestNewPaymentRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestResponse.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestResponse.prototype, "type", void 0);
    return NewPaymentRequestNewPaymentRequestResponse;
}(SpeakeasyBase));
export { NewPaymentRequestNewPaymentRequestResponse };
var NewPaymentRequestRequest = /** @class */ (function (_super) {
    __extends(NewPaymentRequestRequest, _super);
    function NewPaymentRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NewPaymentRequestNewPaymentRequest)
    ], NewPaymentRequestRequest.prototype, "request", void 0);
    return NewPaymentRequestRequest;
}(SpeakeasyBase));
export { NewPaymentRequestRequest };
var NewPaymentRequestResponse = /** @class */ (function (_super) {
    __extends(NewPaymentRequestResponse, _super);
    function NewPaymentRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NewPaymentRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NewPaymentRequestNewPaymentRequestResponse)
    ], NewPaymentRequestResponse.prototype, "newPaymentRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NewPaymentRequestResponse.prototype, "statusCode", void 0);
    return NewPaymentRequestResponse;
}(SpeakeasyBase));
export { NewPaymentRequestResponse };
