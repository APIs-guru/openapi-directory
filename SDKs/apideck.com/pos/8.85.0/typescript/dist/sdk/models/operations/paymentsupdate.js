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
var PaymentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(PaymentsUpdatePathParams, _super);
    function PaymentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PaymentsUpdatePathParams.prototype, "id", void 0);
    return PaymentsUpdatePathParams;
}(SpeakeasyBase));
export { PaymentsUpdatePathParams };
var PaymentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PaymentsUpdateQueryParams, _super);
    function PaymentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], PaymentsUpdateQueryParams.prototype, "raw", void 0);
    return PaymentsUpdateQueryParams;
}(SpeakeasyBase));
export { PaymentsUpdateQueryParams };
var PaymentsUpdateHeaders = /** @class */ (function (_super) {
    __extends(PaymentsUpdateHeaders, _super);
    function PaymentsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PaymentsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PaymentsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PaymentsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return PaymentsUpdateHeaders;
}(SpeakeasyBase));
export { PaymentsUpdateHeaders };
var PaymentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(PaymentsUpdateSecurity, _super);
    function PaymentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PaymentsUpdateSecurity.prototype, "apiKey", void 0);
    return PaymentsUpdateSecurity;
}(SpeakeasyBase));
export { PaymentsUpdateSecurity };
var PaymentsUpdateRequest = /** @class */ (function (_super) {
    __extends(PaymentsUpdateRequest, _super);
    function PaymentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsUpdatePathParams)
    ], PaymentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsUpdateQueryParams)
    ], PaymentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsUpdateHeaders)
    ], PaymentsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PosPaymentInput)
    ], PaymentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentsUpdateSecurity)
    ], PaymentsUpdateRequest.prototype, "security", void 0);
    return PaymentsUpdateRequest;
}(SpeakeasyBase));
export { PaymentsUpdateRequest };
var PaymentsUpdateResponse = /** @class */ (function (_super) {
    __extends(PaymentsUpdateResponse, _super);
    function PaymentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], PaymentsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PaymentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], PaymentsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], PaymentsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PaymentsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], PaymentsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], PaymentsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], PaymentsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePosPaymentResponse)
    ], PaymentsUpdateResponse.prototype, "updatePosPaymentResponse", void 0);
    return PaymentsUpdateResponse;
}(SpeakeasyBase));
export { PaymentsUpdateResponse };
