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
var DepartmentsAllQueryParams = /** @class */ (function (_super) {
    __extends(DepartmentsAllQueryParams, _super);
    function DepartmentsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], DepartmentsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DepartmentsAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], DepartmentsAllQueryParams.prototype, "raw", void 0);
    return DepartmentsAllQueryParams;
}(SpeakeasyBase));
export { DepartmentsAllQueryParams };
var DepartmentsAllHeaders = /** @class */ (function (_super) {
    __extends(DepartmentsAllHeaders, _super);
    function DepartmentsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], DepartmentsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], DepartmentsAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], DepartmentsAllHeaders.prototype, "xApideckServiceId", void 0);
    return DepartmentsAllHeaders;
}(SpeakeasyBase));
export { DepartmentsAllHeaders };
var DepartmentsAllSecurity = /** @class */ (function (_super) {
    __extends(DepartmentsAllSecurity, _super);
    function DepartmentsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DepartmentsAllSecurity.prototype, "apiKey", void 0);
    return DepartmentsAllSecurity;
}(SpeakeasyBase));
export { DepartmentsAllSecurity };
var DepartmentsAllRequest = /** @class */ (function (_super) {
    __extends(DepartmentsAllRequest, _super);
    function DepartmentsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsAllQueryParams)
    ], DepartmentsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsAllHeaders)
    ], DepartmentsAllRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DepartmentsAllSecurity)
    ], DepartmentsAllRequest.prototype, "security", void 0);
    return DepartmentsAllRequest;
}(SpeakeasyBase));
export { DepartmentsAllRequest };
var DepartmentsAllResponse = /** @class */ (function (_super) {
    __extends(DepartmentsAllResponse, _super);
    function DepartmentsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], DepartmentsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DepartmentsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDepartmentsResponse)
    ], DepartmentsAllResponse.prototype, "getDepartmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], DepartmentsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], DepartmentsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DepartmentsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], DepartmentsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], DepartmentsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], DepartmentsAllResponse.prototype, "unprocessableResponse", void 0);
    return DepartmentsAllResponse;
}(SpeakeasyBase));
export { DepartmentsAllResponse };
