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
var WebhooksExecutePathParams = /** @class */ (function (_super) {
    __extends(WebhooksExecutePathParams, _super);
    function WebhooksExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], WebhooksExecutePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], WebhooksExecutePathParams.prototype, "serviceId", void 0);
    return WebhooksExecutePathParams;
}(SpeakeasyBase));
export { WebhooksExecutePathParams };
var WebhooksExecuteSecurity = /** @class */ (function (_super) {
    __extends(WebhooksExecuteSecurity, _super);
    function WebhooksExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksExecuteSecurity.prototype, "apiKey", void 0);
    return WebhooksExecuteSecurity;
}(SpeakeasyBase));
export { WebhooksExecuteSecurity };
var WebhooksExecuteRequest = /** @class */ (function (_super) {
    __extends(WebhooksExecuteRequest, _super);
    function WebhooksExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksExecutePathParams)
    ], WebhooksExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], WebhooksExecuteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksExecuteSecurity)
    ], WebhooksExecuteRequest.prototype, "security", void 0);
    return WebhooksExecuteRequest;
}(SpeakeasyBase));
export { WebhooksExecuteRequest };
var WebhooksExecuteResponse = /** @class */ (function (_super) {
    __extends(WebhooksExecuteResponse, _super);
    function WebhooksExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksExecuteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebhooksExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExecuteWebhookResponse)
    ], WebhooksExecuteResponse.prototype, "executeWebhookResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksExecuteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksExecuteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebhooksExecuteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksExecuteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksExecuteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksExecuteResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksExecuteResponse;
}(SpeakeasyBase));
export { WebhooksExecuteResponse };
