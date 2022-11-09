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
var WebhooksAllQueryParams = /** @class */ (function (_super) {
    __extends(WebhooksAllQueryParams, _super);
    function WebhooksAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], WebhooksAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], WebhooksAllQueryParams.prototype, "limit", void 0);
    return WebhooksAllQueryParams;
}(SpeakeasyBase));
export { WebhooksAllQueryParams };
var WebhooksAllHeaders = /** @class */ (function (_super) {
    __extends(WebhooksAllHeaders, _super);
    function WebhooksAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], WebhooksAllHeaders.prototype, "xApideckAppId", void 0);
    return WebhooksAllHeaders;
}(SpeakeasyBase));
export { WebhooksAllHeaders };
var WebhooksAllSecurity = /** @class */ (function (_super) {
    __extends(WebhooksAllSecurity, _super);
    function WebhooksAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksAllSecurity.prototype, "apiKey", void 0);
    return WebhooksAllSecurity;
}(SpeakeasyBase));
export { WebhooksAllSecurity };
var WebhooksAllRequest = /** @class */ (function (_super) {
    __extends(WebhooksAllRequest, _super);
    function WebhooksAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksAllQueryParams)
    ], WebhooksAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksAllHeaders)
    ], WebhooksAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebhooksAllSecurity)
    ], WebhooksAllRequest.prototype, "security", void 0);
    return WebhooksAllRequest;
}(SpeakeasyBase));
export { WebhooksAllRequest };
var WebhooksAllResponse = /** @class */ (function (_super) {
    __extends(WebhooksAllResponse, _super);
    function WebhooksAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebhooksAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetWebhooksResponse)
    ], WebhooksAllResponse.prototype, "getWebhooksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebhooksAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksAllResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksAllResponse;
}(SpeakeasyBase));
export { WebhooksAllResponse };
