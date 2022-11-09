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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateOrderHeaders = /** @class */ (function (_super) {
    __extends(CreateOrderHeaders, _super);
    function CreateOrderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateOrderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateOrderHeaders;
}(SpeakeasyBase));
export { CreateOrderHeaders };
export var CreateOrderRequestBodyPaymentOptionEnum;
(function (CreateOrderRequestBodyPaymentOptionEnum) {
    CreateOrderRequestBodyPaymentOptionEnum["AllUpfront"] = "ALL_UPFRONT";
    CreateOrderRequestBodyPaymentOptionEnum["NoUpfront"] = "NO_UPFRONT";
    CreateOrderRequestBodyPaymentOptionEnum["PartialUpfront"] = "PARTIAL_UPFRONT";
})(CreateOrderRequestBodyPaymentOptionEnum || (CreateOrderRequestBodyPaymentOptionEnum = {}));
export var CreateOrderRequestBodyPaymentTermEnum;
(function (CreateOrderRequestBodyPaymentTermEnum) {
    CreateOrderRequestBodyPaymentTermEnum["ThreeYears"] = "THREE_YEARS";
})(CreateOrderRequestBodyPaymentTermEnum || (CreateOrderRequestBodyPaymentTermEnum = {}));
var CreateOrderRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrderRequestBody, _super);
    function CreateOrderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=LineItems", elemType: shared.LineItemRequest }),
        __metadata("design:type", Array)
    ], CreateOrderRequestBody.prototype, "lineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=OutpostIdentifier" }),
        __metadata("design:type", String)
    ], CreateOrderRequestBody.prototype, "outpostIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentOption" }),
        __metadata("design:type", String)
    ], CreateOrderRequestBody.prototype, "paymentOption", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentTerm" }),
        __metadata("design:type", String)
    ], CreateOrderRequestBody.prototype, "paymentTerm", void 0);
    return CreateOrderRequestBody;
}(SpeakeasyBase));
export { CreateOrderRequestBody };
var CreateOrderRequest = /** @class */ (function (_super) {
    __extends(CreateOrderRequest, _super);
    function CreateOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateOrderHeaders)
    ], CreateOrderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrderRequestBody)
    ], CreateOrderRequest.prototype, "request", void 0);
    return CreateOrderRequest;
}(SpeakeasyBase));
export { CreateOrderRequest };
var CreateOrderResponse = /** @class */ (function (_super) {
    __extends(CreateOrderResponse, _super);
    function CreateOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateOrderOutput)
    ], CreateOrderResponse.prototype, "createOrderOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateOrderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateOrderResponse.prototype, "validationException", void 0);
    return CreateOrderResponse;
}(SpeakeasyBase));
export { CreateOrderResponse };
