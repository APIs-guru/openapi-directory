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
var LedgerAccountsOnePathParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsOnePathParams, _super);
    function LedgerAccountsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LedgerAccountsOnePathParams.prototype, "id", void 0);
    return LedgerAccountsOnePathParams;
}(SpeakeasyBase));
export { LedgerAccountsOnePathParams };
var LedgerAccountsOneQueryParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsOneQueryParams, _super);
    function LedgerAccountsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LedgerAccountsOneQueryParams.prototype, "raw", void 0);
    return LedgerAccountsOneQueryParams;
}(SpeakeasyBase));
export { LedgerAccountsOneQueryParams };
var LedgerAccountsOneHeaders = /** @class */ (function (_super) {
    __extends(LedgerAccountsOneHeaders, _super);
    function LedgerAccountsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsOneHeaders.prototype, "xApideckServiceId", void 0);
    return LedgerAccountsOneHeaders;
}(SpeakeasyBase));
export { LedgerAccountsOneHeaders };
var LedgerAccountsOneSecurity = /** @class */ (function (_super) {
    __extends(LedgerAccountsOneSecurity, _super);
    function LedgerAccountsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LedgerAccountsOneSecurity.prototype, "apiKey", void 0);
    return LedgerAccountsOneSecurity;
}(SpeakeasyBase));
export { LedgerAccountsOneSecurity };
var LedgerAccountsOneRequest = /** @class */ (function (_super) {
    __extends(LedgerAccountsOneRequest, _super);
    function LedgerAccountsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsOnePathParams)
    ], LedgerAccountsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsOneQueryParams)
    ], LedgerAccountsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsOneHeaders)
    ], LedgerAccountsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsOneSecurity)
    ], LedgerAccountsOneRequest.prototype, "security", void 0);
    return LedgerAccountsOneRequest;
}(SpeakeasyBase));
export { LedgerAccountsOneRequest };
var LedgerAccountsOneResponse = /** @class */ (function (_super) {
    __extends(LedgerAccountsOneResponse, _super);
    function LedgerAccountsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LedgerAccountsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LedgerAccountsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetLedgerAccountResponse)
    ], LedgerAccountsOneResponse.prototype, "getLedgerAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LedgerAccountsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LedgerAccountsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LedgerAccountsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LedgerAccountsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LedgerAccountsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LedgerAccountsOneResponse.prototype, "unprocessableResponse", void 0);
    return LedgerAccountsOneResponse;
}(SpeakeasyBase));
export { LedgerAccountsOneResponse };
