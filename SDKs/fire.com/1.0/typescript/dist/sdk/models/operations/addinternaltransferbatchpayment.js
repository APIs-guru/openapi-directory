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
var AddInternalTransferBatchPaymentPathParams = /** @class */ (function (_super) {
    __extends(AddInternalTransferBatchPaymentPathParams, _super);
    function AddInternalTransferBatchPaymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" }),
        __metadata("design:type", String)
    ], AddInternalTransferBatchPaymentPathParams.prototype, "batchUuid", void 0);
    return AddInternalTransferBatchPaymentPathParams;
}(SpeakeasyBase));
export { AddInternalTransferBatchPaymentPathParams };
var AddInternalTransferBatchPaymentBatchItemInternalTransfer = /** @class */ (function (_super) {
    __extends(AddInternalTransferBatchPaymentBatchItemInternalTransfer, _super);
    function AddInternalTransferBatchPaymentBatchItemInternalTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], AddInternalTransferBatchPaymentBatchItemInternalTransfer.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanFrom" }),
        __metadata("design:type", Number)
    ], AddInternalTransferBatchPaymentBatchItemInternalTransfer.prototype, "icanFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], AddInternalTransferBatchPaymentBatchItemInternalTransfer.prototype, "icanTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], AddInternalTransferBatchPaymentBatchItemInternalTransfer.prototype, "ref", void 0);
    return AddInternalTransferBatchPaymentBatchItemInternalTransfer;
}(SpeakeasyBase));
export { AddInternalTransferBatchPaymentBatchItemInternalTransfer };
var AddInternalTransferBatchPaymentNewBatchItemResponse = /** @class */ (function (_super) {
    __extends(AddInternalTransferBatchPaymentNewBatchItemResponse, _super);
    function AddInternalTransferBatchPaymentNewBatchItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchItemUuid" }),
        __metadata("design:type", String)
    ], AddInternalTransferBatchPaymentNewBatchItemResponse.prototype, "batchItemUuid", void 0);
    return AddInternalTransferBatchPaymentNewBatchItemResponse;
}(SpeakeasyBase));
export { AddInternalTransferBatchPaymentNewBatchItemResponse };
var AddInternalTransferBatchPaymentRequest = /** @class */ (function (_super) {
    __extends(AddInternalTransferBatchPaymentRequest, _super);
    function AddInternalTransferBatchPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddInternalTransferBatchPaymentPathParams)
    ], AddInternalTransferBatchPaymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddInternalTransferBatchPaymentBatchItemInternalTransfer)
    ], AddInternalTransferBatchPaymentRequest.prototype, "request", void 0);
    return AddInternalTransferBatchPaymentRequest;
}(SpeakeasyBase));
export { AddInternalTransferBatchPaymentRequest };
var AddInternalTransferBatchPaymentResponse = /** @class */ (function (_super) {
    __extends(AddInternalTransferBatchPaymentResponse, _super);
    function AddInternalTransferBatchPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddInternalTransferBatchPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddInternalTransferBatchPaymentNewBatchItemResponse)
    ], AddInternalTransferBatchPaymentResponse.prototype, "newBatchItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddInternalTransferBatchPaymentResponse.prototype, "statusCode", void 0);
    return AddInternalTransferBatchPaymentResponse;
}(SpeakeasyBase));
export { AddInternalTransferBatchPaymentResponse };
