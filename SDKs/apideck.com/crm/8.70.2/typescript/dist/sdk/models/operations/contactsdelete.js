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
var ContactsDeletePathParams = /** @class */ (function (_super) {
    __extends(ContactsDeletePathParams, _super);
    function ContactsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ContactsDeletePathParams.prototype, "id", void 0);
    return ContactsDeletePathParams;
}(SpeakeasyBase));
export { ContactsDeletePathParams };
var ContactsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContactsDeleteQueryParams, _super);
    function ContactsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ContactsDeleteQueryParams.prototype, "raw", void 0);
    return ContactsDeleteQueryParams;
}(SpeakeasyBase));
export { ContactsDeleteQueryParams };
var ContactsDeleteHeaders = /** @class */ (function (_super) {
    __extends(ContactsDeleteHeaders, _super);
    function ContactsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ContactsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ContactsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ContactsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return ContactsDeleteHeaders;
}(SpeakeasyBase));
export { ContactsDeleteHeaders };
var ContactsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContactsDeleteSecurity, _super);
    function ContactsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ContactsDeleteSecurity.prototype, "apiKey", void 0);
    return ContactsDeleteSecurity;
}(SpeakeasyBase));
export { ContactsDeleteSecurity };
var ContactsDeleteRequest = /** @class */ (function (_super) {
    __extends(ContactsDeleteRequest, _super);
    function ContactsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ContactsDeletePathParams)
    ], ContactsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ContactsDeleteQueryParams)
    ], ContactsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ContactsDeleteHeaders)
    ], ContactsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ContactsDeleteSecurity)
    ], ContactsDeleteRequest.prototype, "security", void 0);
    return ContactsDeleteRequest;
}(SpeakeasyBase));
export { ContactsDeleteRequest };
var ContactsDeleteResponse = /** @class */ (function (_super) {
    __extends(ContactsDeleteResponse, _super);
    function ContactsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ContactsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ContactsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteContactResponse)
    ], ContactsDeleteResponse.prototype, "deleteContactResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ContactsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ContactsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ContactsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ContactsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ContactsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ContactsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return ContactsDeleteResponse;
}(SpeakeasyBase));
export { ContactsDeleteResponse };
