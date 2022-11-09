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
var CompaniesOnePathParams = /** @class */ (function (_super) {
    __extends(CompaniesOnePathParams, _super);
    function CompaniesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompaniesOnePathParams.prototype, "id", void 0);
    return CompaniesOnePathParams;
}(SpeakeasyBase));
export { CompaniesOnePathParams };
var CompaniesOneQueryParams = /** @class */ (function (_super) {
    __extends(CompaniesOneQueryParams, _super);
    function CompaniesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CompaniesOneQueryParams.prototype, "raw", void 0);
    return CompaniesOneQueryParams;
}(SpeakeasyBase));
export { CompaniesOneQueryParams };
var CompaniesOneHeaders = /** @class */ (function (_super) {
    __extends(CompaniesOneHeaders, _super);
    function CompaniesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CompaniesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CompaniesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CompaniesOneHeaders.prototype, "xApideckServiceId", void 0);
    return CompaniesOneHeaders;
}(SpeakeasyBase));
export { CompaniesOneHeaders };
var CompaniesOneSecurity = /** @class */ (function (_super) {
    __extends(CompaniesOneSecurity, _super);
    function CompaniesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CompaniesOneSecurity.prototype, "apiKey", void 0);
    return CompaniesOneSecurity;
}(SpeakeasyBase));
export { CompaniesOneSecurity };
var CompaniesOneRequest = /** @class */ (function (_super) {
    __extends(CompaniesOneRequest, _super);
    function CompaniesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesOnePathParams)
    ], CompaniesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesOneQueryParams)
    ], CompaniesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesOneHeaders)
    ], CompaniesOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesOneSecurity)
    ], CompaniesOneRequest.prototype, "security", void 0);
    return CompaniesOneRequest;
}(SpeakeasyBase));
export { CompaniesOneRequest };
var CompaniesOneResponse = /** @class */ (function (_super) {
    __extends(CompaniesOneResponse, _super);
    function CompaniesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CompaniesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CompaniesOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetCompanyResponse)
    ], CompaniesOneResponse.prototype, "getCompanyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CompaniesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CompaniesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CompaniesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CompaniesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CompaniesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CompaniesOneResponse.prototype, "unprocessableResponse", void 0);
    return CompaniesOneResponse;
}(SpeakeasyBase));
export { CompaniesOneResponse };
