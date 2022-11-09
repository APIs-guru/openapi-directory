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
var WebhooksAddHeaders = /** @class */ (function (_super) {
    __extends(WebhooksAddHeaders, _super);
    function WebhooksAddHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], WebhooksAddHeaders.prototype, "xApideckAppId", void 0);
    return WebhooksAddHeaders;
}(SpeakeasyBase));
export { WebhooksAddHeaders };
var WebhooksAddSecurity = /** @class */ (function (_super) {
    __extends(WebhooksAddSecurity, _super);
    function WebhooksAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksAddSecurity.prototype, "apiKey", void 0);
    return WebhooksAddSecurity;
}(SpeakeasyBase));
export { WebhooksAddSecurity };
var WebhooksAddRequest = /** @class */ (function (_super) {
    __extends(WebhooksAddRequest, _super);
    function WebhooksAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksAddHeaders)
    ], WebhooksAddRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateWebhookRequest)
    ], WebhooksAddRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksAddSecurity)
    ], WebhooksAddRequest.prototype, "security", void 0);
    return WebhooksAddRequest;
}(SpeakeasyBase));
export { WebhooksAddRequest };
var WebhooksAddResponse = /** @class */ (function (_super) {
    __extends(WebhooksAddResponse, _super);
    function WebhooksAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksAddResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebhooksAddResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateWebhookResponse)
    ], WebhooksAddResponse.prototype, "createWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksAddResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksAddResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebhooksAddResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksAddResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksAddResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksAddResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksAddResponse;
}(SpeakeasyBase));
export { WebhooksAddResponse };
