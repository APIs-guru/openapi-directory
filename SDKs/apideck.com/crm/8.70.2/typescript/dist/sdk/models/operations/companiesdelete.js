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
var CompaniesDeletePathParams = /** @class */ (function (_super) {
    __extends(CompaniesDeletePathParams, _super);
    function CompaniesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompaniesDeletePathParams.prototype, "id", void 0);
    return CompaniesDeletePathParams;
}(SpeakeasyBase));
export { CompaniesDeletePathParams };
var CompaniesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CompaniesDeleteQueryParams, _super);
    function CompaniesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CompaniesDeleteQueryParams.prototype, "raw", void 0);
    return CompaniesDeleteQueryParams;
}(SpeakeasyBase));
export { CompaniesDeleteQueryParams };
var CompaniesDeleteHeaders = /** @class */ (function (_super) {
    __extends(CompaniesDeleteHeaders, _super);
    function CompaniesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CompaniesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CompaniesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CompaniesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return CompaniesDeleteHeaders;
}(SpeakeasyBase));
export { CompaniesDeleteHeaders };
var CompaniesDeleteSecurity = /** @class */ (function (_super) {
    __extends(CompaniesDeleteSecurity, _super);
    function CompaniesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CompaniesDeleteSecurity.prototype, "apiKey", void 0);
    return CompaniesDeleteSecurity;
}(SpeakeasyBase));
export { CompaniesDeleteSecurity };
var CompaniesDeleteRequest = /** @class */ (function (_super) {
    __extends(CompaniesDeleteRequest, _super);
    function CompaniesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesDeletePathParams)
    ], CompaniesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesDeleteQueryParams)
    ], CompaniesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesDeleteHeaders)
    ], CompaniesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesDeleteSecurity)
    ], CompaniesDeleteRequest.prototype, "security", void 0);
    return CompaniesDeleteRequest;
}(SpeakeasyBase));
export { CompaniesDeleteRequest };
var CompaniesDeleteResponse = /** @class */ (function (_super) {
    __extends(CompaniesDeleteResponse, _super);
    function CompaniesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CompaniesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CompaniesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteCompanyResponse)
    ], CompaniesDeleteResponse.prototype, "deleteCompanyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CompaniesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CompaniesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CompaniesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CompaniesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CompaniesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CompaniesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return CompaniesDeleteResponse;
}(SpeakeasyBase));
export { CompaniesDeleteResponse };
