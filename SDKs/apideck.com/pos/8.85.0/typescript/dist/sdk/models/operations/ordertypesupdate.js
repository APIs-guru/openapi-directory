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
var OrderTypesUpdatePathParams = /** @class */ (function (_super) {
    __extends(OrderTypesUpdatePathParams, _super);
    function OrderTypesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OrderTypesUpdatePathParams.prototype, "id", void 0);
    return OrderTypesUpdatePathParams;
}(SpeakeasyBase));
export { OrderTypesUpdatePathParams };
var OrderTypesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(OrderTypesUpdateQueryParams, _super);
    function OrderTypesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OrderTypesUpdateQueryParams.prototype, "raw", void 0);
    return OrderTypesUpdateQueryParams;
}(SpeakeasyBase));
export { OrderTypesUpdateQueryParams };
var OrderTypesUpdateHeaders = /** @class */ (function (_super) {
    __extends(OrderTypesUpdateHeaders, _super);
    function OrderTypesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OrderTypesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OrderTypesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OrderTypesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return OrderTypesUpdateHeaders;
}(SpeakeasyBase));
export { OrderTypesUpdateHeaders };
var OrderTypesUpdateSecurity = /** @class */ (function (_super) {
    __extends(OrderTypesUpdateSecurity, _super);
    function OrderTypesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OrderTypesUpdateSecurity.prototype, "apiKey", void 0);
    return OrderTypesUpdateSecurity;
}(SpeakeasyBase));
export { OrderTypesUpdateSecurity };
var OrderTypesUpdateRequest = /** @class */ (function (_super) {
    __extends(OrderTypesUpdateRequest, _super);
    function OrderTypesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesUpdatePathParams)
    ], OrderTypesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesUpdateQueryParams)
    ], OrderTypesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesUpdateHeaders)
    ], OrderTypesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrderTypeInput)
    ], OrderTypesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesUpdateSecurity)
    ], OrderTypesUpdateRequest.prototype, "security", void 0);
    return OrderTypesUpdateRequest;
}(SpeakeasyBase));
export { OrderTypesUpdateRequest };
var OrderTypesUpdateResponse = /** @class */ (function (_super) {
    __extends(OrderTypesUpdateResponse, _super);
    function OrderTypesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OrderTypesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrderTypesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OrderTypesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OrderTypesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrderTypesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OrderTypesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OrderTypesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OrderTypesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateOrderTypeResponse)
    ], OrderTypesUpdateResponse.prototype, "updateOrderTypeResponse", void 0);
    return OrderTypesUpdateResponse;
}(SpeakeasyBase));
export { OrderTypesUpdateResponse };
