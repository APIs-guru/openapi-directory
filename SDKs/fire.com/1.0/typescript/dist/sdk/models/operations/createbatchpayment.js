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
export var CreateBatchPaymentNewBatchTypeEnum;
(function (CreateBatchPaymentNewBatchTypeEnum) {
    CreateBatchPaymentNewBatchTypeEnum["BankTransfer"] = "BANK_TRANSFER";
    CreateBatchPaymentNewBatchTypeEnum["InternalTransfer"] = "INTERNAL_TRANSFER";
})(CreateBatchPaymentNewBatchTypeEnum || (CreateBatchPaymentNewBatchTypeEnum = {}));
var CreateBatchPaymentNewBatch = /** @class */ (function (_super) {
    __extends(CreateBatchPaymentNewBatch, _super);
    function CreateBatchPaymentNewBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchName" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatch.prototype, "batchName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callBackUrl" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatch.prototype, "callBackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatch.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobNumber" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatch.prototype, "jobNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatch.prototype, "type", void 0);
    return CreateBatchPaymentNewBatch;
}(SpeakeasyBase));
export { CreateBatchPaymentNewBatch };
var CreateBatchPaymentNewBatchResponse = /** @class */ (function (_super) {
    __extends(CreateBatchPaymentNewBatchResponse, _super);
    function CreateBatchPaymentNewBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchUuid" }),
        __metadata("design:type", String)
    ], CreateBatchPaymentNewBatchResponse.prototype, "batchUuid", void 0);
    return CreateBatchPaymentNewBatchResponse;
}(SpeakeasyBase));
export { CreateBatchPaymentNewBatchResponse };
var CreateBatchPaymentRequest = /** @class */ (function (_super) {
    __extends(CreateBatchPaymentRequest, _super);
    function CreateBatchPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBatchPaymentNewBatch)
    ], CreateBatchPaymentRequest.prototype, "request", void 0);
    return CreateBatchPaymentRequest;
}(SpeakeasyBase));
export { CreateBatchPaymentRequest };
var CreateBatchPaymentResponse = /** @class */ (function (_super) {
    __extends(CreateBatchPaymentResponse, _super);
    function CreateBatchPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBatchPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBatchPaymentNewBatchResponse)
    ], CreateBatchPaymentResponse.prototype, "newBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBatchPaymentResponse.prototype, "statusCode", void 0);
    return CreateBatchPaymentResponse;
}(SpeakeasyBase));
export { CreateBatchPaymentResponse };
