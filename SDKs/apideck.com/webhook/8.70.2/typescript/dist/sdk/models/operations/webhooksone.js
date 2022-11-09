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
var WebhooksOnePathParams = /** @class */ (function (_super) {
    __extends(WebhooksOnePathParams, _super);
    function WebhooksOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], WebhooksOnePathParams.prototype, "id", void 0);
    return WebhooksOnePathParams;
}(SpeakeasyBase));
export { WebhooksOnePathParams };
var WebhooksOneHeaders = /** @class */ (function (_super) {
    __extends(WebhooksOneHeaders, _super);
    function WebhooksOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], WebhooksOneHeaders.prototype, "xApideckAppId", void 0);
    return WebhooksOneHeaders;
}(SpeakeasyBase));
export { WebhooksOneHeaders };
var WebhooksOneSecurity = /** @class */ (function (_super) {
    __extends(WebhooksOneSecurity, _super);
    function WebhooksOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksOneSecurity.prototype, "apiKey", void 0);
    return WebhooksOneSecurity;
}(SpeakeasyBase));
export { WebhooksOneSecurity };
var WebhooksOneRequest = /** @class */ (function (_super) {
    __extends(WebhooksOneRequest, _super);
    function WebhooksOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksOnePathParams)
    ], WebhooksOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksOneHeaders)
    ], WebhooksOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksOneSecurity)
    ], WebhooksOneRequest.prototype, "security", void 0);
    return WebhooksOneRequest;
}(SpeakeasyBase));
export { WebhooksOneRequest };
var WebhooksOneResponse = /** @class */ (function (_super) {
    __extends(WebhooksOneResponse, _super);
    function WebhooksOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebhooksOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetWebhookResponse)
    ], WebhooksOneResponse.prototype, "getWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebhooksOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksOneResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksOneResponse;
}(SpeakeasyBase));
export { WebhooksOneResponse };
