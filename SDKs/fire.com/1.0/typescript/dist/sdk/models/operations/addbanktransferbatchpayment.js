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
var AddBankTransferBatchPaymentPathParams = /** @class */ (function (_super) {
    __extends(AddBankTransferBatchPaymentPathParams, _super);
    function AddBankTransferBatchPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentPathParams.prototype, "batchUuid", void 0);
    return AddBankTransferBatchPaymentPathParams;
}(SpeakeasyBase));
export { AddBankTransferBatchPaymentPathParams };
export var AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;
(function (AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum) {
    AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum["AccountDetails"] = "ACCOUNT_DETAILS";
})(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum || (AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum = {}));
var AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 = /** @class */ (function (_super) {
    __extends(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2, _super);
    function AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destAccountHolderName" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "destAccountHolderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destAccountNumber" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "destAccountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destIban" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "destIban", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destNsc" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "destNsc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "payeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yourRef" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2.prototype, "yourRef", void 0);
    return AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2;
}(SpeakeasyBase));
export { AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 };
export var AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;
(function (AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum) {
    AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum["PayeeId"] = "PAYEE_ID";
})(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum || (AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum = {}));
var AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 = /** @class */ (function (_super) {
    __extends(AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1, _super);
    function AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "myRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeId" }),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "payeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yourRef" }),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1.prototype, "yourRef", void 0);
    return AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1;
}(SpeakeasyBase));
export { AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 };
var AddBankTransferBatchPaymentRequest = /** @class */ (function (_super) {
    __extends(AddBankTransferBatchPaymentRequest, _super);
    function AddBankTransferBatchPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddBankTransferBatchPaymentPathParams)
    ], AddBankTransferBatchPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], AddBankTransferBatchPaymentRequest.prototype, "request", void 0);
    return AddBankTransferBatchPaymentRequest;
}(SpeakeasyBase));
export { AddBankTransferBatchPaymentRequest };
var AddBankTransferBatchPaymentResponse = /** @class */ (function (_super) {
    __extends(AddBankTransferBatchPaymentResponse, _super);
    function AddBankTransferBatchPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddBankTransferBatchPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddBankTransferBatchPaymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema)
    ], AddBankTransferBatchPaymentResponse.prototype, "onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema", void 0);
    return AddBankTransferBatchPaymentResponse;
}(SpeakeasyBase));
export { AddBankTransferBatchPaymentResponse };
