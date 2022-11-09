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
var ActivitiesAllQueryParams = /** @class */ (function (_super) {
    __extends(ActivitiesAllQueryParams, _super);
    function ActivitiesAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ActivitiesAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ActivitiesAllQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ActivitiesAllQueryParams.prototype, "raw", void 0);
    return ActivitiesAllQueryParams;
}(SpeakeasyBase));
export { ActivitiesAllQueryParams };
var ActivitiesAllHeaders = /** @class */ (function (_super) {
    __extends(ActivitiesAllHeaders, _super);
    function ActivitiesAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ActivitiesAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ActivitiesAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ActivitiesAllHeaders.prototype, "xApideckServiceId", void 0);
    return ActivitiesAllHeaders;
}(SpeakeasyBase));
export { ActivitiesAllHeaders };
var ActivitiesAllSecurity = /** @class */ (function (_super) {
    __extends(ActivitiesAllSecurity, _super);
    function ActivitiesAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ActivitiesAllSecurity.prototype, "apiKey", void 0);
    return ActivitiesAllSecurity;
}(SpeakeasyBase));
export { ActivitiesAllSecurity };
var ActivitiesAllRequest = /** @class */ (function (_super) {
    __extends(ActivitiesAllRequest, _super);
    function ActivitiesAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesAllQueryParams)
    ], ActivitiesAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesAllHeaders)
    ], ActivitiesAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesAllSecurity)
    ], ActivitiesAllRequest.prototype, "security", void 0);
    return ActivitiesAllRequest;
}(SpeakeasyBase));
export { ActivitiesAllRequest };
var ActivitiesAllResponse = /** @class */ (function (_super) {
    __extends(ActivitiesAllResponse, _super);
    function ActivitiesAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ActivitiesAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ActivitiesAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetActivitiesResponse)
    ], ActivitiesAllResponse.prototype, "getActivitiesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ActivitiesAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ActivitiesAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ActivitiesAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ActivitiesAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ActivitiesAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ActivitiesAllResponse.prototype, "unprocessableResponse", void 0);
    return ActivitiesAllResponse;
}(SpeakeasyBase));
export { ActivitiesAllResponse };
