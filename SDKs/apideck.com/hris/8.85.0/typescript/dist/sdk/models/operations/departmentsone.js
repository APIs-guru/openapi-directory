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
var DepartmentsOnePathParams = /** @class */ (function (_super) {
    __extends(DepartmentsOnePathParams, _super);
    function DepartmentsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DepartmentsOnePathParams.prototype, "id", void 0);
    return DepartmentsOnePathParams;
}(SpeakeasyBase));
export { DepartmentsOnePathParams };
var DepartmentsOneQueryParams = /** @class */ (function (_super) {
    __extends(DepartmentsOneQueryParams, _super);
    function DepartmentsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], DepartmentsOneQueryParams.prototype, "raw", void 0);
    return DepartmentsOneQueryParams;
}(SpeakeasyBase));
export { DepartmentsOneQueryParams };
var DepartmentsOneHeaders = /** @class */ (function (_super) {
    __extends(DepartmentsOneHeaders, _super);
    function DepartmentsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], DepartmentsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], DepartmentsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], DepartmentsOneHeaders.prototype, "xApideckServiceId", void 0);
    return DepartmentsOneHeaders;
}(SpeakeasyBase));
export { DepartmentsOneHeaders };
var DepartmentsOneSecurity = /** @class */ (function (_super) {
    __extends(DepartmentsOneSecurity, _super);
    function DepartmentsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DepartmentsOneSecurity.prototype, "apiKey", void 0);
    return DepartmentsOneSecurity;
}(SpeakeasyBase));
export { DepartmentsOneSecurity };
var DepartmentsOneRequest = /** @class */ (function (_super) {
    __extends(DepartmentsOneRequest, _super);
    function DepartmentsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsOnePathParams)
    ], DepartmentsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsOneQueryParams)
    ], DepartmentsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsOneHeaders)
    ], DepartmentsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsOneSecurity)
    ], DepartmentsOneRequest.prototype, "security", void 0);
    return DepartmentsOneRequest;
}(SpeakeasyBase));
export { DepartmentsOneRequest };
var DepartmentsOneResponse = /** @class */ (function (_super) {
    __extends(DepartmentsOneResponse, _super);
    function DepartmentsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], DepartmentsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DepartmentsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDepartmentResponse)
    ], DepartmentsOneResponse.prototype, "getDepartmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], DepartmentsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], DepartmentsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DepartmentsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], DepartmentsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], DepartmentsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], DepartmentsOneResponse.prototype, "unprocessableResponse", void 0);
    return DepartmentsOneResponse;
}(SpeakeasyBase));
export { DepartmentsOneResponse };
