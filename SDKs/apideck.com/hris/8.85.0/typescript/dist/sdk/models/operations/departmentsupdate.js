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
var DepartmentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DepartmentsUpdatePathParams, _super);
    function DepartmentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DepartmentsUpdatePathParams.prototype, "id", void 0);
    return DepartmentsUpdatePathParams;
}(SpeakeasyBase));
export { DepartmentsUpdatePathParams };
var DepartmentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DepartmentsUpdateQueryParams, _super);
    function DepartmentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], DepartmentsUpdateQueryParams.prototype, "raw", void 0);
    return DepartmentsUpdateQueryParams;
}(SpeakeasyBase));
export { DepartmentsUpdateQueryParams };
var DepartmentsUpdateHeaders = /** @class */ (function (_super) {
    __extends(DepartmentsUpdateHeaders, _super);
    function DepartmentsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], DepartmentsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], DepartmentsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], DepartmentsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return DepartmentsUpdateHeaders;
}(SpeakeasyBase));
export { DepartmentsUpdateHeaders };
var DepartmentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DepartmentsUpdateSecurity, _super);
    function DepartmentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DepartmentsUpdateSecurity.prototype, "apiKey", void 0);
    return DepartmentsUpdateSecurity;
}(SpeakeasyBase));
export { DepartmentsUpdateSecurity };
var DepartmentsUpdateRequest = /** @class */ (function (_super) {
    __extends(DepartmentsUpdateRequest, _super);
    function DepartmentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsUpdatePathParams)
    ], DepartmentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsUpdateQueryParams)
    ], DepartmentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsUpdateHeaders)
    ], DepartmentsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DepartmentInput)
    ], DepartmentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsUpdateSecurity)
    ], DepartmentsUpdateRequest.prototype, "security", void 0);
    return DepartmentsUpdateRequest;
}(SpeakeasyBase));
export { DepartmentsUpdateRequest };
var DepartmentsUpdateResponse = /** @class */ (function (_super) {
    __extends(DepartmentsUpdateResponse, _super);
    function DepartmentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], DepartmentsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DepartmentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], DepartmentsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], DepartmentsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DepartmentsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], DepartmentsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], DepartmentsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], DepartmentsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDepartmentResponse)
    ], DepartmentsUpdateResponse.prototype, "updateDepartmentResponse", void 0);
    return DepartmentsUpdateResponse;
}(SpeakeasyBase));
export { DepartmentsUpdateResponse };
