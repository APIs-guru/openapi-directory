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
var WebhooksShortExecutePathParams = /** @class */ (function (_super) {
    __extends(WebhooksShortExecutePathParams, _super);
    function WebhooksShortExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], WebhooksShortExecutePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], WebhooksShortExecutePathParams.prototype, "serviceId", void 0);
    return WebhooksShortExecutePathParams;
}(SpeakeasyBase));
export { WebhooksShortExecutePathParams };
var WebhooksShortExecuteQueryParams = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteQueryParams, _super);
    function WebhooksShortExecuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=e" }),
        __metadata("design:type", String)
    ], WebhooksShortExecuteQueryParams.prototype, "e", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=l_id" }),
        __metadata("design:type", String)
    ], WebhooksShortExecuteQueryParams.prototype, "lId", void 0);
    return WebhooksShortExecuteQueryParams;
}(SpeakeasyBase));
export { WebhooksShortExecuteQueryParams };
var WebhooksShortExecuteSecurity = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteSecurity, _super);
    function WebhooksShortExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksShortExecuteSecurity.prototype, "apiKey", void 0);
    return WebhooksShortExecuteSecurity;
}(SpeakeasyBase));
export { WebhooksShortExecuteSecurity };
var WebhooksShortExecuteRequest = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteRequest, _super);
    function WebhooksShortExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebhooksShortExecutePathParams)
    ], WebhooksShortExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebhooksShortExecuteQueryParams)
    ], WebhooksShortExecuteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], WebhooksShortExecuteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebhooksShortExecuteSecurity)
    ], WebhooksShortExecuteRequest.prototype, "security", void 0);
    return WebhooksShortExecuteRequest;
}(SpeakeasyBase));
export { WebhooksShortExecuteRequest };
var WebhooksShortExecuteResponse = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteResponse, _super);
    function WebhooksShortExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksShortExecuteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebhooksShortExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExecuteWebhookResponse)
    ], WebhooksShortExecuteResponse.prototype, "executeWebhookResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksShortExecuteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksShortExecuteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebhooksShortExecuteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksShortExecuteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksShortExecuteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksShortExecuteResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksShortExecuteResponse;
}(SpeakeasyBase));
export { WebhooksShortExecuteResponse };
