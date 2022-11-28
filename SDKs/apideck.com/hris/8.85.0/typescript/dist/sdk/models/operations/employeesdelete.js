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
var EmployeesDeletePathParams = /** @class */ (function (_super) {
    __extends(EmployeesDeletePathParams, _super);
    function EmployeesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EmployeesDeletePathParams.prototype, "id", void 0);
    return EmployeesDeletePathParams;
}(SpeakeasyBase));
export { EmployeesDeletePathParams };
var EmployeesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(EmployeesDeleteQueryParams, _super);
    function EmployeesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], EmployeesDeleteQueryParams.prototype, "raw", void 0);
    return EmployeesDeleteQueryParams;
}(SpeakeasyBase));
export { EmployeesDeleteQueryParams };
var EmployeesDeleteHeaders = /** @class */ (function (_super) {
    __extends(EmployeesDeleteHeaders, _super);
    function EmployeesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], EmployeesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], EmployeesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], EmployeesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return EmployeesDeleteHeaders;
}(SpeakeasyBase));
export { EmployeesDeleteHeaders };
var EmployeesDeleteSecurity = /** @class */ (function (_super) {
    __extends(EmployeesDeleteSecurity, _super);
    function EmployeesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EmployeesDeleteSecurity.prototype, "apiKey", void 0);
    return EmployeesDeleteSecurity;
}(SpeakeasyBase));
export { EmployeesDeleteSecurity };
var EmployeesDeleteRequest = /** @class */ (function (_super) {
    __extends(EmployeesDeleteRequest, _super);
    function EmployeesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesDeletePathParams)
    ], EmployeesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesDeleteQueryParams)
    ], EmployeesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesDeleteHeaders)
    ], EmployeesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesDeleteSecurity)
    ], EmployeesDeleteRequest.prototype, "security", void 0);
    return EmployeesDeleteRequest;
}(SpeakeasyBase));
export { EmployeesDeleteRequest };
var EmployeesDeleteResponse = /** @class */ (function (_super) {
    __extends(EmployeesDeleteResponse, _super);
    function EmployeesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], EmployeesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EmployeesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteEmployeeResponse)
    ], EmployeesDeleteResponse.prototype, "deleteEmployeeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], EmployeesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], EmployeesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EmployeesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], EmployeesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], EmployeesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], EmployeesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return EmployeesDeleteResponse;
}(SpeakeasyBase));
export { EmployeesDeleteResponse };
