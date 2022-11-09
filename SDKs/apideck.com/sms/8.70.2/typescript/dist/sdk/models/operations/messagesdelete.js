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
var MessagesDeletePathParams = /** @class */ (function (_super) {
    __extends(MessagesDeletePathParams, _super);
    function MessagesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MessagesDeletePathParams.prototype, "id", void 0);
    return MessagesDeletePathParams;
}(SpeakeasyBase));
export { MessagesDeletePathParams };
var MessagesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MessagesDeleteQueryParams, _super);
    function MessagesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], MessagesDeleteQueryParams.prototype, "raw", void 0);
    return MessagesDeleteQueryParams;
}(SpeakeasyBase));
export { MessagesDeleteQueryParams };
var MessagesDeleteHeaders = /** @class */ (function (_super) {
    __extends(MessagesDeleteHeaders, _super);
    function MessagesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], MessagesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], MessagesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], MessagesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return MessagesDeleteHeaders;
}(SpeakeasyBase));
export { MessagesDeleteHeaders };
var MessagesDeleteSecurity = /** @class */ (function (_super) {
    __extends(MessagesDeleteSecurity, _super);
    function MessagesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MessagesDeleteSecurity.prototype, "apiKey", void 0);
    return MessagesDeleteSecurity;
}(SpeakeasyBase));
export { MessagesDeleteSecurity };
var MessagesDeleteRequest = /** @class */ (function (_super) {
    __extends(MessagesDeleteRequest, _super);
    function MessagesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesDeletePathParams)
    ], MessagesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesDeleteQueryParams)
    ], MessagesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesDeleteHeaders)
    ], MessagesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MessagesDeleteSecurity)
    ], MessagesDeleteRequest.prototype, "security", void 0);
    return MessagesDeleteRequest;
}(SpeakeasyBase));
export { MessagesDeleteRequest };
var MessagesDeleteResponse = /** @class */ (function (_super) {
    __extends(MessagesDeleteResponse, _super);
    function MessagesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], MessagesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MessagesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteMessageResponse)
    ], MessagesDeleteResponse.prototype, "deleteMessageResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], MessagesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], MessagesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MessagesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], MessagesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], MessagesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], MessagesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return MessagesDeleteResponse;
}(SpeakeasyBase));
export { MessagesDeleteResponse };
