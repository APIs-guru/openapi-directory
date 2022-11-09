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
var MessagesOnePathParams = /** @class */ (function (_super) {
    __extends(MessagesOnePathParams, _super);
    function MessagesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MessagesOnePathParams.prototype, "id", void 0);
    return MessagesOnePathParams;
}(SpeakeasyBase));
export { MessagesOnePathParams };
var MessagesOneQueryParams = /** @class */ (function (_super) {
    __extends(MessagesOneQueryParams, _super);
    function MessagesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], MessagesOneQueryParams.prototype, "raw", void 0);
    return MessagesOneQueryParams;
}(SpeakeasyBase));
export { MessagesOneQueryParams };
var MessagesOneHeaders = /** @class */ (function (_super) {
    __extends(MessagesOneHeaders, _super);
    function MessagesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], MessagesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], MessagesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], MessagesOneHeaders.prototype, "xApideckServiceId", void 0);
    return MessagesOneHeaders;
}(SpeakeasyBase));
export { MessagesOneHeaders };
var MessagesOneSecurity = /** @class */ (function (_super) {
    __extends(MessagesOneSecurity, _super);
    function MessagesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MessagesOneSecurity.prototype, "apiKey", void 0);
    return MessagesOneSecurity;
}(SpeakeasyBase));
export { MessagesOneSecurity };
var MessagesOneRequest = /** @class */ (function (_super) {
    __extends(MessagesOneRequest, _super);
    function MessagesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesOnePathParams)
    ], MessagesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesOneQueryParams)
    ], MessagesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesOneHeaders)
    ], MessagesOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesOneSecurity)
    ], MessagesOneRequest.prototype, "security", void 0);
    return MessagesOneRequest;
}(SpeakeasyBase));
export { MessagesOneRequest };
var MessagesOneResponse = /** @class */ (function (_super) {
    __extends(MessagesOneResponse, _super);
    function MessagesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], MessagesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MessagesOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetMessageResponse)
    ], MessagesOneResponse.prototype, "getMessageResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], MessagesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], MessagesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MessagesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], MessagesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], MessagesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], MessagesOneResponse.prototype, "unprocessableResponse", void 0);
    return MessagesOneResponse;
}(SpeakeasyBase));
export { MessagesOneResponse };
