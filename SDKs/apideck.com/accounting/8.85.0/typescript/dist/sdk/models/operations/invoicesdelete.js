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
var InvoicesDeletePathParams = /** @class */ (function (_super) {
    __extends(InvoicesDeletePathParams, _super);
    function InvoicesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], InvoicesDeletePathParams.prototype, "id", void 0);
    return InvoicesDeletePathParams;
}(SpeakeasyBase));
export { InvoicesDeletePathParams };
var InvoicesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(InvoicesDeleteQueryParams, _super);
    function InvoicesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], InvoicesDeleteQueryParams.prototype, "raw", void 0);
    return InvoicesDeleteQueryParams;
}(SpeakeasyBase));
export { InvoicesDeleteQueryParams };
var InvoicesDeleteHeaders = /** @class */ (function (_super) {
    __extends(InvoicesDeleteHeaders, _super);
    function InvoicesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], InvoicesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], InvoicesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], InvoicesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return InvoicesDeleteHeaders;
}(SpeakeasyBase));
export { InvoicesDeleteHeaders };
var InvoicesDeleteSecurity = /** @class */ (function (_super) {
    __extends(InvoicesDeleteSecurity, _super);
    function InvoicesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], InvoicesDeleteSecurity.prototype, "apiKey", void 0);
    return InvoicesDeleteSecurity;
}(SpeakeasyBase));
export { InvoicesDeleteSecurity };
var InvoicesDeleteRequest = /** @class */ (function (_super) {
    __extends(InvoicesDeleteRequest, _super);
    function InvoicesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoicesDeletePathParams)
    ], InvoicesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoicesDeleteQueryParams)
    ], InvoicesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoicesDeleteHeaders)
    ], InvoicesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvoicesDeleteSecurity)
    ], InvoicesDeleteRequest.prototype, "security", void 0);
    return InvoicesDeleteRequest;
}(SpeakeasyBase));
export { InvoicesDeleteRequest };
var InvoicesDeleteResponse = /** @class */ (function (_super) {
    __extends(InvoicesDeleteResponse, _super);
    function InvoicesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], InvoicesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvoicesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteInvoiceResponse)
    ], InvoicesDeleteResponse.prototype, "deleteInvoiceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], InvoicesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], InvoicesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvoicesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], InvoicesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], InvoicesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], InvoicesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return InvoicesDeleteResponse;
}(SpeakeasyBase));
export { InvoicesDeleteResponse };
