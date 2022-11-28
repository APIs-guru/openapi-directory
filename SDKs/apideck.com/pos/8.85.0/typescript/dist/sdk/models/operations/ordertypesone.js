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
var OrderTypesOnePathParams = /** @class */ (function (_super) {
    __extends(OrderTypesOnePathParams, _super);
    function OrderTypesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OrderTypesOnePathParams.prototype, "id", void 0);
    return OrderTypesOnePathParams;
}(SpeakeasyBase));
export { OrderTypesOnePathParams };
var OrderTypesOneQueryParams = /** @class */ (function (_super) {
    __extends(OrderTypesOneQueryParams, _super);
    function OrderTypesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OrderTypesOneQueryParams.prototype, "raw", void 0);
    return OrderTypesOneQueryParams;
}(SpeakeasyBase));
export { OrderTypesOneQueryParams };
var OrderTypesOneHeaders = /** @class */ (function (_super) {
    __extends(OrderTypesOneHeaders, _super);
    function OrderTypesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OrderTypesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OrderTypesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OrderTypesOneHeaders.prototype, "xApideckServiceId", void 0);
    return OrderTypesOneHeaders;
}(SpeakeasyBase));
export { OrderTypesOneHeaders };
var OrderTypesOneSecurity = /** @class */ (function (_super) {
    __extends(OrderTypesOneSecurity, _super);
    function OrderTypesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OrderTypesOneSecurity.prototype, "apiKey", void 0);
    return OrderTypesOneSecurity;
}(SpeakeasyBase));
export { OrderTypesOneSecurity };
var OrderTypesOneRequest = /** @class */ (function (_super) {
    __extends(OrderTypesOneRequest, _super);
    function OrderTypesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesOnePathParams)
    ], OrderTypesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesOneQueryParams)
    ], OrderTypesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesOneHeaders)
    ], OrderTypesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderTypesOneSecurity)
    ], OrderTypesOneRequest.prototype, "security", void 0);
    return OrderTypesOneRequest;
}(SpeakeasyBase));
export { OrderTypesOneRequest };
var OrderTypesOneResponse = /** @class */ (function (_super) {
    __extends(OrderTypesOneResponse, _super);
    function OrderTypesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OrderTypesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrderTypesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOrderTypeResponse)
    ], OrderTypesOneResponse.prototype, "getOrderTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OrderTypesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OrderTypesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrderTypesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OrderTypesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OrderTypesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OrderTypesOneResponse.prototype, "unprocessableResponse", void 0);
    return OrderTypesOneResponse;
}(SpeakeasyBase));
export { OrderTypesOneResponse };
