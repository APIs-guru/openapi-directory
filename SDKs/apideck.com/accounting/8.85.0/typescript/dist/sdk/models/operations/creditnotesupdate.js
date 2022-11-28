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
var CreditNotesUpdatePathParams = /** @class */ (function (_super) {
    __extends(CreditNotesUpdatePathParams, _super);
    function CreditNotesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CreditNotesUpdatePathParams.prototype, "id", void 0);
    return CreditNotesUpdatePathParams;
}(SpeakeasyBase));
export { CreditNotesUpdatePathParams };
var CreditNotesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(CreditNotesUpdateQueryParams, _super);
    function CreditNotesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CreditNotesUpdateQueryParams.prototype, "raw", void 0);
    return CreditNotesUpdateQueryParams;
}(SpeakeasyBase));
export { CreditNotesUpdateQueryParams };
var CreditNotesUpdateHeaders = /** @class */ (function (_super) {
    __extends(CreditNotesUpdateHeaders, _super);
    function CreditNotesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CreditNotesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CreditNotesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CreditNotesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return CreditNotesUpdateHeaders;
}(SpeakeasyBase));
export { CreditNotesUpdateHeaders };
var CreditNotesUpdateSecurity = /** @class */ (function (_super) {
    __extends(CreditNotesUpdateSecurity, _super);
    function CreditNotesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CreditNotesUpdateSecurity.prototype, "apiKey", void 0);
    return CreditNotesUpdateSecurity;
}(SpeakeasyBase));
export { CreditNotesUpdateSecurity };
var CreditNotesUpdateRequest = /** @class */ (function (_super) {
    __extends(CreditNotesUpdateRequest, _super);
    function CreditNotesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesUpdatePathParams)
    ], CreditNotesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesUpdateQueryParams)
    ], CreditNotesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesUpdateHeaders)
    ], CreditNotesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreditNoteInput)
    ], CreditNotesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesUpdateSecurity)
    ], CreditNotesUpdateRequest.prototype, "security", void 0);
    return CreditNotesUpdateRequest;
}(SpeakeasyBase));
export { CreditNotesUpdateRequest };
var CreditNotesUpdateResponse = /** @class */ (function (_super) {
    __extends(CreditNotesUpdateResponse, _super);
    function CreditNotesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CreditNotesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreditNotesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CreditNotesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CreditNotesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreditNotesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CreditNotesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CreditNotesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CreditNotesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateCreditNoteResponse)
    ], CreditNotesUpdateResponse.prototype, "updateCreditNoteResponse", void 0);
    return CreditNotesUpdateResponse;
}(SpeakeasyBase));
export { CreditNotesUpdateResponse };
