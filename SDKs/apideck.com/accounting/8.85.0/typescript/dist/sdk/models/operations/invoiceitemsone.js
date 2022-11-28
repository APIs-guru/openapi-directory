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
var InvoiceItemsOnePathParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsOnePathParams, _super);
    function InvoiceItemsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], InvoiceItemsOnePathParams.prototype, "id", void 0);
    return InvoiceItemsOnePathParams;
}(SpeakeasyBase));
export { InvoiceItemsOnePathParams };
var InvoiceItemsOneQueryParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsOneQueryParams, _super);
    function InvoiceItemsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemsOneQueryParams.prototype, "raw", void 0);
    return InvoiceItemsOneQueryParams;
}(SpeakeasyBase));
export { InvoiceItemsOneQueryParams };
var InvoiceItemsOneHeaders = /** @class */ (function (_super) {
    __extends(InvoiceItemsOneHeaders, _super);
    function InvoiceItemsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsOneHeaders.prototype, "xApideckServiceId", void 0);
    return InvoiceItemsOneHeaders;
}(SpeakeasyBase));
export { InvoiceItemsOneHeaders };
var InvoiceItemsOneSecurity = /** @class */ (function (_super) {
    __extends(InvoiceItemsOneSecurity, _super);
    function InvoiceItemsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], InvoiceItemsOneSecurity.prototype, "apiKey", void 0);
    return InvoiceItemsOneSecurity;
}(SpeakeasyBase));
export { InvoiceItemsOneSecurity };
var InvoiceItemsOneRequest = /** @class */ (function (_super) {
    __extends(InvoiceItemsOneRequest, _super);
    function InvoiceItemsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsOnePathParams)
    ], InvoiceItemsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsOneQueryParams)
    ], InvoiceItemsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsOneHeaders)
    ], InvoiceItemsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsOneSecurity)
    ], InvoiceItemsOneRequest.prototype, "security", void 0);
    return InvoiceItemsOneRequest;
}(SpeakeasyBase));
export { InvoiceItemsOneRequest };
var InvoiceItemsOneResponse = /** @class */ (function (_super) {
    __extends(InvoiceItemsOneResponse, _super);
    function InvoiceItemsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], InvoiceItemsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceItemsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetInvoiceItemResponse)
    ], InvoiceItemsOneResponse.prototype, "getInvoiceItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], InvoiceItemsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], InvoiceItemsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceItemsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], InvoiceItemsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], InvoiceItemsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], InvoiceItemsOneResponse.prototype, "unprocessableResponse", void 0);
    return InvoiceItemsOneResponse;
}(SpeakeasyBase));
export { InvoiceItemsOneResponse };
