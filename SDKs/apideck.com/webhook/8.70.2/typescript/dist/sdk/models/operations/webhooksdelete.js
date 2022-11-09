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
var WebhooksDeletePathParams = /** @class */ (function (_super) {
    __extends(WebhooksDeletePathParams, _super);
    function WebhooksDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], WebhooksDeletePathParams.prototype, "id", void 0);
    return WebhooksDeletePathParams;
}(SpeakeasyBase));
export { WebhooksDeletePathParams };
var WebhooksDeleteHeaders = /** @class */ (function (_super) {
    __extends(WebhooksDeleteHeaders, _super);
    function WebhooksDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], WebhooksDeleteHeaders.prototype, "xApideckAppId", void 0);
    return WebhooksDeleteHeaders;
}(SpeakeasyBase));
export { WebhooksDeleteHeaders };
var WebhooksDeleteSecurity = /** @class */ (function (_super) {
    __extends(WebhooksDeleteSecurity, _super);
    function WebhooksDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksDeleteSecurity.prototype, "apiKey", void 0);
    return WebhooksDeleteSecurity;
}(SpeakeasyBase));
export { WebhooksDeleteSecurity };
var WebhooksDeleteRequest = /** @class */ (function (_super) {
    __extends(WebhooksDeleteRequest, _super);
    function WebhooksDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksDeletePathParams)
    ], WebhooksDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksDeleteHeaders)
    ], WebhooksDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksDeleteSecurity)
    ], WebhooksDeleteRequest.prototype, "security", void 0);
    return WebhooksDeleteRequest;
}(SpeakeasyBase));
export { WebhooksDeleteRequest };
var WebhooksDeleteResponse = /** @class */ (function (_super) {
    __extends(WebhooksDeleteResponse, _super);
    function WebhooksDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebhooksDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteWebhookResponse)
    ], WebhooksDeleteResponse.prototype, "deleteWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebhooksDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksDeleteResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksDeleteResponse;
}(SpeakeasyBase));
export { WebhooksDeleteResponse };
