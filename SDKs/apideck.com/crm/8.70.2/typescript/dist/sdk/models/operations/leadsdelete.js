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
var LeadsDeletePathParams = /** @class */ (function (_super) {
    __extends(LeadsDeletePathParams, _super);
    function LeadsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LeadsDeletePathParams.prototype, "id", void 0);
    return LeadsDeletePathParams;
}(SpeakeasyBase));
export { LeadsDeletePathParams };
var LeadsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LeadsDeleteQueryParams, _super);
    function LeadsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LeadsDeleteQueryParams.prototype, "raw", void 0);
    return LeadsDeleteQueryParams;
}(SpeakeasyBase));
export { LeadsDeleteQueryParams };
var LeadsDeleteHeaders = /** @class */ (function (_super) {
    __extends(LeadsDeleteHeaders, _super);
    function LeadsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LeadsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LeadsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LeadsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return LeadsDeleteHeaders;
}(SpeakeasyBase));
export { LeadsDeleteHeaders };
var LeadsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LeadsDeleteSecurity, _super);
    function LeadsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LeadsDeleteSecurity.prototype, "apiKey", void 0);
    return LeadsDeleteSecurity;
}(SpeakeasyBase));
export { LeadsDeleteSecurity };
var LeadsDeleteRequest = /** @class */ (function (_super) {
    __extends(LeadsDeleteRequest, _super);
    function LeadsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsDeletePathParams)
    ], LeadsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsDeleteQueryParams)
    ], LeadsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsDeleteHeaders)
    ], LeadsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsDeleteSecurity)
    ], LeadsDeleteRequest.prototype, "security", void 0);
    return LeadsDeleteRequest;
}(SpeakeasyBase));
export { LeadsDeleteRequest };
var LeadsDeleteResponse = /** @class */ (function (_super) {
    __extends(LeadsDeleteResponse, _super);
    function LeadsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LeadsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LeadsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteLeadResponse)
    ], LeadsDeleteResponse.prototype, "deleteLeadResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LeadsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LeadsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LeadsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LeadsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LeadsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LeadsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return LeadsDeleteResponse;
}(SpeakeasyBase));
export { LeadsDeleteResponse };
