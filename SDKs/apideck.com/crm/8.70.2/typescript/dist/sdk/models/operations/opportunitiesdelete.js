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
var OpportunitiesDeletePathParams = /** @class */ (function (_super) {
    __extends(OpportunitiesDeletePathParams, _super);
    function OpportunitiesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OpportunitiesDeletePathParams.prototype, "id", void 0);
    return OpportunitiesDeletePathParams;
}(SpeakeasyBase));
export { OpportunitiesDeletePathParams };
var OpportunitiesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(OpportunitiesDeleteQueryParams, _super);
    function OpportunitiesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OpportunitiesDeleteQueryParams.prototype, "raw", void 0);
    return OpportunitiesDeleteQueryParams;
}(SpeakeasyBase));
export { OpportunitiesDeleteQueryParams };
var OpportunitiesDeleteHeaders = /** @class */ (function (_super) {
    __extends(OpportunitiesDeleteHeaders, _super);
    function OpportunitiesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OpportunitiesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OpportunitiesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OpportunitiesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return OpportunitiesDeleteHeaders;
}(SpeakeasyBase));
export { OpportunitiesDeleteHeaders };
var OpportunitiesDeleteSecurity = /** @class */ (function (_super) {
    __extends(OpportunitiesDeleteSecurity, _super);
    function OpportunitiesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OpportunitiesDeleteSecurity.prototype, "apiKey", void 0);
    return OpportunitiesDeleteSecurity;
}(SpeakeasyBase));
export { OpportunitiesDeleteSecurity };
var OpportunitiesDeleteRequest = /** @class */ (function (_super) {
    __extends(OpportunitiesDeleteRequest, _super);
    function OpportunitiesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesDeletePathParams)
    ], OpportunitiesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesDeleteQueryParams)
    ], OpportunitiesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesDeleteHeaders)
    ], OpportunitiesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesDeleteSecurity)
    ], OpportunitiesDeleteRequest.prototype, "security", void 0);
    return OpportunitiesDeleteRequest;
}(SpeakeasyBase));
export { OpportunitiesDeleteRequest };
var OpportunitiesDeleteResponse = /** @class */ (function (_super) {
    __extends(OpportunitiesDeleteResponse, _super);
    function OpportunitiesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OpportunitiesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OpportunitiesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteOpportunityResponse)
    ], OpportunitiesDeleteResponse.prototype, "deleteOpportunityResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OpportunitiesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OpportunitiesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OpportunitiesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OpportunitiesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OpportunitiesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OpportunitiesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return OpportunitiesDeleteResponse;
}(SpeakeasyBase));
export { OpportunitiesDeleteResponse };
