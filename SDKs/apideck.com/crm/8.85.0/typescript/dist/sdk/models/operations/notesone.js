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
var NotesOnePathParams = /** @class */ (function (_super) {
    __extends(NotesOnePathParams, _super);
    function NotesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], NotesOnePathParams.prototype, "id", void 0);
    return NotesOnePathParams;
}(SpeakeasyBase));
export { NotesOnePathParams };
var NotesOneQueryParams = /** @class */ (function (_super) {
    __extends(NotesOneQueryParams, _super);
    function NotesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], NotesOneQueryParams.prototype, "raw", void 0);
    return NotesOneQueryParams;
}(SpeakeasyBase));
export { NotesOneQueryParams };
var NotesOneHeaders = /** @class */ (function (_super) {
    __extends(NotesOneHeaders, _super);
    function NotesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], NotesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], NotesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], NotesOneHeaders.prototype, "xApideckServiceId", void 0);
    return NotesOneHeaders;
}(SpeakeasyBase));
export { NotesOneHeaders };
var NotesOneSecurity = /** @class */ (function (_super) {
    __extends(NotesOneSecurity, _super);
    function NotesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NotesOneSecurity.prototype, "apiKey", void 0);
    return NotesOneSecurity;
}(SpeakeasyBase));
export { NotesOneSecurity };
var NotesOneRequest = /** @class */ (function (_super) {
    __extends(NotesOneRequest, _super);
    function NotesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotesOnePathParams)
    ], NotesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotesOneQueryParams)
    ], NotesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotesOneHeaders)
    ], NotesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotesOneSecurity)
    ], NotesOneRequest.prototype, "security", void 0);
    return NotesOneRequest;
}(SpeakeasyBase));
export { NotesOneRequest };
var NotesOneResponse = /** @class */ (function (_super) {
    __extends(NotesOneResponse, _super);
    function NotesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], NotesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NotesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetNoteResponse)
    ], NotesOneResponse.prototype, "getNoteResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], NotesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], NotesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NotesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], NotesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], NotesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], NotesOneResponse.prototype, "unprocessableResponse", void 0);
    return NotesOneResponse;
}(SpeakeasyBase));
export { NotesOneResponse };
