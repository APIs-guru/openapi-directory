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
var InvoiceItemsDeletePathParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeletePathParams, _super);
    function InvoiceItemsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], InvoiceItemsDeletePathParams.prototype, "id", void 0);
    return InvoiceItemsDeletePathParams;
}(SpeakeasyBase));
export { InvoiceItemsDeletePathParams };
var InvoiceItemsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeleteQueryParams, _super);
    function InvoiceItemsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemsDeleteQueryParams.prototype, "raw", void 0);
    return InvoiceItemsDeleteQueryParams;
}(SpeakeasyBase));
export { InvoiceItemsDeleteQueryParams };
var InvoiceItemsDeleteHeaders = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeleteHeaders, _super);
    function InvoiceItemsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return InvoiceItemsDeleteHeaders;
}(SpeakeasyBase));
export { InvoiceItemsDeleteHeaders };
var InvoiceItemsDeleteSecurity = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeleteSecurity, _super);
    function InvoiceItemsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], InvoiceItemsDeleteSecurity.prototype, "apiKey", void 0);
    return InvoiceItemsDeleteSecurity;
}(SpeakeasyBase));
export { InvoiceItemsDeleteSecurity };
var InvoiceItemsDeleteRequest = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeleteRequest, _super);
    function InvoiceItemsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsDeletePathParams)
    ], InvoiceItemsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsDeleteQueryParams)
    ], InvoiceItemsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsDeleteHeaders)
    ], InvoiceItemsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsDeleteSecurity)
    ], InvoiceItemsDeleteRequest.prototype, "security", void 0);
    return InvoiceItemsDeleteRequest;
}(SpeakeasyBase));
export { InvoiceItemsDeleteRequest };
var InvoiceItemsDeleteResponse = /** @class */ (function (_super) {
    __extends(InvoiceItemsDeleteResponse, _super);
    function InvoiceItemsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], InvoiceItemsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceItemsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteTaxRateResponse)
    ], InvoiceItemsDeleteResponse.prototype, "deleteTaxRateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], InvoiceItemsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], InvoiceItemsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceItemsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], InvoiceItemsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], InvoiceItemsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], InvoiceItemsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return InvoiceItemsDeleteResponse;
}(SpeakeasyBase));
export { InvoiceItemsDeleteResponse };
