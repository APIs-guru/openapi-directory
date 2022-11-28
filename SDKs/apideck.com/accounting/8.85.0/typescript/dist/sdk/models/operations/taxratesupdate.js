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
var TaxRatesUpdatePathParams = /** @class */ (function (_super) {
    __extends(TaxRatesUpdatePathParams, _super);
    function TaxRatesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TaxRatesUpdatePathParams.prototype, "id", void 0);
    return TaxRatesUpdatePathParams;
}(SpeakeasyBase));
export { TaxRatesUpdatePathParams };
var TaxRatesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TaxRatesUpdateQueryParams, _super);
    function TaxRatesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], TaxRatesUpdateQueryParams.prototype, "raw", void 0);
    return TaxRatesUpdateQueryParams;
}(SpeakeasyBase));
export { TaxRatesUpdateQueryParams };
var TaxRatesUpdateHeaders = /** @class */ (function (_super) {
    __extends(TaxRatesUpdateHeaders, _super);
    function TaxRatesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], TaxRatesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], TaxRatesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], TaxRatesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return TaxRatesUpdateHeaders;
}(SpeakeasyBase));
export { TaxRatesUpdateHeaders };
var TaxRatesUpdateSecurity = /** @class */ (function (_super) {
    __extends(TaxRatesUpdateSecurity, _super);
    function TaxRatesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TaxRatesUpdateSecurity.prototype, "apiKey", void 0);
    return TaxRatesUpdateSecurity;
}(SpeakeasyBase));
export { TaxRatesUpdateSecurity };
var TaxRatesUpdateRequest = /** @class */ (function (_super) {
    __extends(TaxRatesUpdateRequest, _super);
    function TaxRatesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesUpdatePathParams)
    ], TaxRatesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesUpdateQueryParams)
    ], TaxRatesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesUpdateHeaders)
    ], TaxRatesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TaxRateInput)
    ], TaxRatesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxRatesUpdateSecurity)
    ], TaxRatesUpdateRequest.prototype, "security", void 0);
    return TaxRatesUpdateRequest;
}(SpeakeasyBase));
export { TaxRatesUpdateRequest };
var TaxRatesUpdateResponse = /** @class */ (function (_super) {
    __extends(TaxRatesUpdateResponse, _super);
    function TaxRatesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], TaxRatesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxRatesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], TaxRatesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], TaxRatesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxRatesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], TaxRatesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], TaxRatesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], TaxRatesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateTaxRateResponse)
    ], TaxRatesUpdateResponse.prototype, "updateTaxRateResponse", void 0);
    return TaxRatesUpdateResponse;
}(SpeakeasyBase));
export { TaxRatesUpdateResponse };
