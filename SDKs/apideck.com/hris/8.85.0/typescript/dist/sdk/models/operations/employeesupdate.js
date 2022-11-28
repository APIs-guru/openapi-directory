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
var EmployeesUpdatePathParams = /** @class */ (function (_super) {
    __extends(EmployeesUpdatePathParams, _super);
    function EmployeesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EmployeesUpdatePathParams.prototype, "id", void 0);
    return EmployeesUpdatePathParams;
}(SpeakeasyBase));
export { EmployeesUpdatePathParams };
var EmployeesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(EmployeesUpdateQueryParams, _super);
    function EmployeesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], EmployeesUpdateQueryParams.prototype, "raw", void 0);
    return EmployeesUpdateQueryParams;
}(SpeakeasyBase));
export { EmployeesUpdateQueryParams };
var EmployeesUpdateHeaders = /** @class */ (function (_super) {
    __extends(EmployeesUpdateHeaders, _super);
    function EmployeesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], EmployeesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], EmployeesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], EmployeesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return EmployeesUpdateHeaders;
}(SpeakeasyBase));
export { EmployeesUpdateHeaders };
var EmployeesUpdateSecurity = /** @class */ (function (_super) {
    __extends(EmployeesUpdateSecurity, _super);
    function EmployeesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EmployeesUpdateSecurity.prototype, "apiKey", void 0);
    return EmployeesUpdateSecurity;
}(SpeakeasyBase));
export { EmployeesUpdateSecurity };
var EmployeesUpdateRequest = /** @class */ (function (_super) {
    __extends(EmployeesUpdateRequest, _super);
    function EmployeesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesUpdatePathParams)
    ], EmployeesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesUpdateQueryParams)
    ], EmployeesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesUpdateHeaders)
    ], EmployeesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EmployeeInput)
    ], EmployeesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EmployeesUpdateSecurity)
    ], EmployeesUpdateRequest.prototype, "security", void 0);
    return EmployeesUpdateRequest;
}(SpeakeasyBase));
export { EmployeesUpdateRequest };
var EmployeesUpdateResponse = /** @class */ (function (_super) {
    __extends(EmployeesUpdateResponse, _super);
    function EmployeesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], EmployeesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EmployeesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], EmployeesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], EmployeesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EmployeesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], EmployeesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], EmployeesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], EmployeesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateEmployeeResponse)
    ], EmployeesUpdateResponse.prototype, "updateEmployeeResponse", void 0);
    return EmployeesUpdateResponse;
}(SpeakeasyBase));
export { EmployeesUpdateResponse };
