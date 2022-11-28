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
var GetPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsPathParams, _super);
    function GetPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentUuid" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPathParams.prototype, "paymentUuid", void 0);
    return GetPaymentDetailsPathParams;
}(SpeakeasyBase));
export { GetPaymentDetailsPathParams };
export var GetPaymentDetailsPaymentRequestStatusEnum;
(function (GetPaymentDetailsPaymentRequestStatusEnum) {
    GetPaymentDetailsPaymentRequestStatusEnum["AwaitingAuthorisation"] = "AWAITING_AUTHORISATION";
    GetPaymentDetailsPaymentRequestStatusEnum["Authorised"] = "AUTHORISED";
    GetPaymentDetailsPaymentRequestStatusEnum["AwaitingMultiAuthorisation"] = "AWAITING_MULTI_AUTHORISATION";
    GetPaymentDetailsPaymentRequestStatusEnum["NotAuthorised"] = "NOT_AUTHORISED";
    GetPaymentDetailsPaymentRequestStatusEnum["Paid"] = "PAID";
    GetPaymentDetailsPaymentRequestStatusEnum["Rejected"] = "REJECTED";
    GetPaymentDetailsPaymentRequestStatusEnum["Accepted"] = "ACCEPTED";
    GetPaymentDetailsPaymentRequestStatusEnum["Received"] = "RECEIVED";
})(GetPaymentDetailsPaymentRequestStatusEnum || (GetPaymentDetailsPaymentRequestStatusEnum = {}));
export var GetPaymentDetailsPaymentRequestTransactionTypeEnum;
(function (GetPaymentDetailsPaymentRequestTransactionTypeEnum) {
    GetPaymentDetailsPaymentRequestTransactionTypeEnum["RefundRequest"] = "REFUND_REQUEST";
    GetPaymentDetailsPaymentRequestTransactionTypeEnum["Payment"] = "PAYMENT";
})(GetPaymentDetailsPaymentRequestTransactionTypeEnum || (GetPaymentDetailsPaymentRequestTransactionTypeEnum = {}));
export var GetPaymentDetailsPaymentRequestTypeEnum;
(function (GetPaymentDetailsPaymentRequestTypeEnum) {
    GetPaymentDetailsPaymentRequestTypeEnum["Other"] = "OTHER";
})(GetPaymentDetailsPaymentRequestTypeEnum || (GetPaymentDetailsPaymentRequestTypeEnum = {}));
var GetPaymentDetailsPaymentRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsPaymentRequest, _super);
    function GetPaymentDetailsPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "additionalFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "collectFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetPaymentDetailsPaymentRequest.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], GetPaymentDetailsPaymentRequest.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandatoryFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "mandatoryFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxNumberPayments" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "maxNumberPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderDetails" }),
        __metadata("design:type", shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails)
    ], GetPaymentDetailsPaymentRequest.prototype, "orderDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentRequestCode" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "paymentRequestCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentUuid" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "paymentUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnUrl" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "returnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionType" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "transactionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookUrl" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "webhookUrl", void 0);
    return GetPaymentDetailsPaymentRequest;
}(SpeakeasyBase));
export { GetPaymentDetailsPaymentRequest };
var GetPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsRequest, _super);
    function GetPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDetailsPathParams)
    ], GetPaymentDetailsRequest.prototype, "pathParams", void 0);
    return GetPaymentDetailsRequest;
}(SpeakeasyBase));
export { GetPaymentDetailsRequest };
var GetPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsResponse, _super);
    function GetPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDetailsPaymentRequest)
    ], GetPaymentDetailsResponse.prototype, "paymentRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetPaymentDetailsResponse;
}(SpeakeasyBase));
export { GetPaymentDetailsResponse };
