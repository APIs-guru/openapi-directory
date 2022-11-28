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
var CreditNotesOnePathParams = /** @class */ (function (_super) {
    __extends(CreditNotesOnePathParams, _super);
    function CreditNotesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CreditNotesOnePathParams.prototype, "id", void 0);
    return CreditNotesOnePathParams;
}(SpeakeasyBase));
export { CreditNotesOnePathParams };
var CreditNotesOneQueryParams = /** @class */ (function (_super) {
    __extends(CreditNotesOneQueryParams, _super);
    function CreditNotesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], CreditNotesOneQueryParams.prototype, "raw", void 0);
    return CreditNotesOneQueryParams;
}(SpeakeasyBase));
export { CreditNotesOneQueryParams };
var CreditNotesOneHeaders = /** @class */ (function (_super) {
    __extends(CreditNotesOneHeaders, _super);
    function CreditNotesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], CreditNotesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], CreditNotesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], CreditNotesOneHeaders.prototype, "xApideckServiceId", void 0);
    return CreditNotesOneHeaders;
}(SpeakeasyBase));
export { CreditNotesOneHeaders };
var CreditNotesOneSecurity = /** @class */ (function (_super) {
    __extends(CreditNotesOneSecurity, _super);
    function CreditNotesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CreditNotesOneSecurity.prototype, "apiKey", void 0);
    return CreditNotesOneSecurity;
}(SpeakeasyBase));
export { CreditNotesOneSecurity };
var CreditNotesOneRequest = /** @class */ (function (_super) {
    __extends(CreditNotesOneRequest, _super);
    function CreditNotesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesOnePathParams)
    ], CreditNotesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesOneQueryParams)
    ], CreditNotesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesOneHeaders)
    ], CreditNotesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreditNotesOneSecurity)
    ], CreditNotesOneRequest.prototype, "security", void 0);
    return CreditNotesOneRequest;
}(SpeakeasyBase));
export { CreditNotesOneRequest };
var CreditNotesOneResponse = /** @class */ (function (_super) {
    __extends(CreditNotesOneResponse, _super);
    function CreditNotesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], CreditNotesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreditNotesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetCreditNoteResponse)
    ], CreditNotesOneResponse.prototype, "getCreditNoteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], CreditNotesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], CreditNotesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreditNotesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], CreditNotesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], CreditNotesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], CreditNotesOneResponse.prototype, "unprocessableResponse", void 0);
    return CreditNotesOneResponse;
}(SpeakeasyBase));
export { CreditNotesOneResponse };
