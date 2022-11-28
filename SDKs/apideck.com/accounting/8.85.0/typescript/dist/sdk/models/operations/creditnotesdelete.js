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
var CreditNotesDeletePathParams = /** @class */ (function (_super) {
    __extends(CreditNotesDeletePathParams, _super);
    function CreditNotesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CreditNotesDeletePathParams.prototype, "id", void 0);
    return CreditNotesDeletePathParams;
}(SpeakeasyBase));
export { CreditNotesDeletePathParams };
var CreditNotesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CreditNotesDeleteQueryParams, _super);
    function CreditNotesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CreditNotesDeleteQueryParams.prototype, "raw", void 0);
    return CreditNotesDeleteQueryParams;
}(SpeakeasyBase));
export { CreditNotesDeleteQueryParams };
var CreditNotesDeleteHeaders = /** @class */ (function (_super) {
    __extends(CreditNotesDeleteHeaders, _super);
    function CreditNotesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CreditNotesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CreditNotesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CreditNotesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return CreditNotesDeleteHeaders;
}(SpeakeasyBase));
export { CreditNotesDeleteHeaders };
var CreditNotesDeleteSecurity = /** @class */ (function (_super) {
    __extends(CreditNotesDeleteSecurity, _super);
    function CreditNotesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CreditNotesDeleteSecurity.prototype, "apiKey", void 0);
    return CreditNotesDeleteSecurity;
}(SpeakeasyBase));
export { CreditNotesDeleteSecurity };
var CreditNotesDeleteRequest = /** @class */ (function (_super) {
    __extends(CreditNotesDeleteRequest, _super);
    function CreditNotesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesDeletePathParams)
    ], CreditNotesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesDeleteQueryParams)
    ], CreditNotesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesDeleteHeaders)
    ], CreditNotesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesDeleteSecurity)
    ], CreditNotesDeleteRequest.prototype, "security", void 0);
    return CreditNotesDeleteRequest;
}(SpeakeasyBase));
export { CreditNotesDeleteRequest };
var CreditNotesDeleteResponse = /** @class */ (function (_super) {
    __extends(CreditNotesDeleteResponse, _super);
    function CreditNotesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CreditNotesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreditNotesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteCreditNoteResponse)
    ], CreditNotesDeleteResponse.prototype, "deleteCreditNoteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CreditNotesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CreditNotesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreditNotesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CreditNotesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CreditNotesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CreditNotesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return CreditNotesDeleteResponse;
}(SpeakeasyBase));
export { CreditNotesDeleteResponse };
