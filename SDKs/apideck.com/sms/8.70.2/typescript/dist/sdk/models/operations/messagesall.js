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
var MessagesAllQueryParams = /** @class */ (function (_super) {
    __extends(MessagesAllQueryParams, _super);
    function MessagesAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], MessagesAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], MessagesAllQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], MessagesAllQueryParams.prototype, "raw", void 0);
    return MessagesAllQueryParams;
}(SpeakeasyBase));
export { MessagesAllQueryParams };
var MessagesAllHeaders = /** @class */ (function (_super) {
    __extends(MessagesAllHeaders, _super);
    function MessagesAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], MessagesAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], MessagesAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], MessagesAllHeaders.prototype, "xApideckServiceId", void 0);
    return MessagesAllHeaders;
}(SpeakeasyBase));
export { MessagesAllHeaders };
var MessagesAllSecurity = /** @class */ (function (_super) {
    __extends(MessagesAllSecurity, _super);
    function MessagesAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MessagesAllSecurity.prototype, "apiKey", void 0);
    return MessagesAllSecurity;
}(SpeakeasyBase));
export { MessagesAllSecurity };
var MessagesAllRequest = /** @class */ (function (_super) {
    __extends(MessagesAllRequest, _super);
    function MessagesAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesAllQueryParams)
    ], MessagesAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesAllHeaders)
    ], MessagesAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesAllSecurity)
    ], MessagesAllRequest.prototype, "security", void 0);
    return MessagesAllRequest;
}(SpeakeasyBase));
export { MessagesAllRequest };
var MessagesAllResponse = /** @class */ (function (_super) {
    __extends(MessagesAllResponse, _super);
    function MessagesAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], MessagesAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MessagesAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetMessagesResponse)
    ], MessagesAllResponse.prototype, "getMessagesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], MessagesAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], MessagesAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MessagesAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], MessagesAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], MessagesAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], MessagesAllResponse.prototype, "unprocessableResponse", void 0);
    return MessagesAllResponse;
}(SpeakeasyBase));
export { MessagesAllResponse };
