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
var InvoiceItemsUpdatePathParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdatePathParams, _super);
    function InvoiceItemsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], InvoiceItemsUpdatePathParams.prototype, "id", void 0);
    return InvoiceItemsUpdatePathParams;
}(SpeakeasyBase));
export { InvoiceItemsUpdatePathParams };
var InvoiceItemsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdateQueryParams, _super);
    function InvoiceItemsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemsUpdateQueryParams.prototype, "raw", void 0);
    return InvoiceItemsUpdateQueryParams;
}(SpeakeasyBase));
export { InvoiceItemsUpdateQueryParams };
var InvoiceItemsUpdateHeaders = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdateHeaders, _super);
    function InvoiceItemsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], InvoiceItemsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return InvoiceItemsUpdateHeaders;
}(SpeakeasyBase));
export { InvoiceItemsUpdateHeaders };
var InvoiceItemsUpdateSecurity = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdateSecurity, _super);
    function InvoiceItemsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], InvoiceItemsUpdateSecurity.prototype, "apiKey", void 0);
    return InvoiceItemsUpdateSecurity;
}(SpeakeasyBase));
export { InvoiceItemsUpdateSecurity };
var InvoiceItemsUpdateRequest = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdateRequest, _super);
    function InvoiceItemsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsUpdatePathParams)
    ], InvoiceItemsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsUpdateQueryParams)
    ], InvoiceItemsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsUpdateHeaders)
    ], InvoiceItemsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InvoiceItemInput)
    ], InvoiceItemsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoiceItemsUpdateSecurity)
    ], InvoiceItemsUpdateRequest.prototype, "security", void 0);
    return InvoiceItemsUpdateRequest;
}(SpeakeasyBase));
export { InvoiceItemsUpdateRequest };
var InvoiceItemsUpdateResponse = /** @class */ (function (_super) {
    __extends(InvoiceItemsUpdateResponse, _super);
    function InvoiceItemsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], InvoiceItemsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoiceItemsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], InvoiceItemsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], InvoiceItemsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoiceItemsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], InvoiceItemsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], InvoiceItemsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], InvoiceItemsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateInvoiceItemsResponse)
    ], InvoiceItemsUpdateResponse.prototype, "updateInvoiceItemsResponse", void 0);
    return InvoiceItemsUpdateResponse;
}(SpeakeasyBase));
export { InvoiceItemsUpdateResponse };
