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
var CompaniesAllQueryParams = /** @class */ (function (_super) {
    __extends(CompaniesAllQueryParams, _super);
    function CompaniesAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], CompaniesAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.CompaniesFilter)
    ], CompaniesAllQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CompaniesAllQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CompaniesAllQueryParams.prototype, "raw", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort" }),
        __metadata("design:type", shared.CompaniesSort)
    ], CompaniesAllQueryParams.prototype, "sort", void 0);
    return CompaniesAllQueryParams;
}(SpeakeasyBase));
export { CompaniesAllQueryParams };
var CompaniesAllHeaders = /** @class */ (function (_super) {
    __extends(CompaniesAllHeaders, _super);
    function CompaniesAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CompaniesAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CompaniesAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CompaniesAllHeaders.prototype, "xApideckServiceId", void 0);
    return CompaniesAllHeaders;
}(SpeakeasyBase));
export { CompaniesAllHeaders };
var CompaniesAllSecurity = /** @class */ (function (_super) {
    __extends(CompaniesAllSecurity, _super);
    function CompaniesAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CompaniesAllSecurity.prototype, "apiKey", void 0);
    return CompaniesAllSecurity;
}(SpeakeasyBase));
export { CompaniesAllSecurity };
var CompaniesAllRequest = /** @class */ (function (_super) {
    __extends(CompaniesAllRequest, _super);
    function CompaniesAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesAllQueryParams)
    ], CompaniesAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesAllHeaders)
    ], CompaniesAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompaniesAllSecurity)
    ], CompaniesAllRequest.prototype, "security", void 0);
    return CompaniesAllRequest;
}(SpeakeasyBase));
export { CompaniesAllRequest };
var CompaniesAllResponse = /** @class */ (function (_super) {
    __extends(CompaniesAllResponse, _super);
    function CompaniesAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CompaniesAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CompaniesAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetCompaniesResponse)
    ], CompaniesAllResponse.prototype, "getCompaniesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CompaniesAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CompaniesAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CompaniesAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CompaniesAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CompaniesAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CompaniesAllResponse.prototype, "unprocessableResponse", void 0);
    return CompaniesAllResponse;
}(SpeakeasyBase));
export { CompaniesAllResponse };
