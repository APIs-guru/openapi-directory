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
var ConsumersOnePathParams = /** @class */ (function (_super) {
    __extends(ConsumersOnePathParams, _super);
    function ConsumersOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=consumer_id" }),
        __metadata("design:type", String)
    ], ConsumersOnePathParams.prototype, "consumerId", void 0);
    return ConsumersOnePathParams;
}(SpeakeasyBase));
export { ConsumersOnePathParams };
var ConsumersOneHeaders = /** @class */ (function (_super) {
    __extends(ConsumersOneHeaders, _super);
    function ConsumersOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConsumersOneHeaders.prototype, "xApideckAppId", void 0);
    return ConsumersOneHeaders;
}(SpeakeasyBase));
export { ConsumersOneHeaders };
var ConsumersOneSecurity = /** @class */ (function (_super) {
    __extends(ConsumersOneSecurity, _super);
    function ConsumersOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConsumersOneSecurity.prototype, "apiKey", void 0);
    return ConsumersOneSecurity;
}(SpeakeasyBase));
export { ConsumersOneSecurity };
var ConsumersOneRequest = /** @class */ (function (_super) {
    __extends(ConsumersOneRequest, _super);
    function ConsumersOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConsumersOnePathParams)
    ], ConsumersOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConsumersOneHeaders)
    ], ConsumersOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConsumersOneSecurity)
    ], ConsumersOneRequest.prototype, "security", void 0);
    return ConsumersOneRequest;
}(SpeakeasyBase));
export { ConsumersOneRequest };
var ConsumersOneResponse = /** @class */ (function (_super) {
    __extends(ConsumersOneResponse, _super);
    function ConsumersOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConsumersOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConsumersOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConsumerResponse)
    ], ConsumersOneResponse.prototype, "getConsumerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConsumersOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConsumersOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConsumersOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConsumersOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConsumersOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConsumersOneResponse.prototype, "unprocessableResponse", void 0);
    return ConsumersOneResponse;
}(SpeakeasyBase));
export { ConsumersOneResponse };
