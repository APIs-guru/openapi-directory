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
var LedgerAccountsDeletePathParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeletePathParams, _super);
    function LedgerAccountsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LedgerAccountsDeletePathParams.prototype, "id", void 0);
    return LedgerAccountsDeletePathParams;
}(SpeakeasyBase));
export { LedgerAccountsDeletePathParams };
var LedgerAccountsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeleteQueryParams, _super);
    function LedgerAccountsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LedgerAccountsDeleteQueryParams.prototype, "raw", void 0);
    return LedgerAccountsDeleteQueryParams;
}(SpeakeasyBase));
export { LedgerAccountsDeleteQueryParams };
var LedgerAccountsDeleteHeaders = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeleteHeaders, _super);
    function LedgerAccountsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return LedgerAccountsDeleteHeaders;
}(SpeakeasyBase));
export { LedgerAccountsDeleteHeaders };
var LedgerAccountsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeleteSecurity, _super);
    function LedgerAccountsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LedgerAccountsDeleteSecurity.prototype, "apiKey", void 0);
    return LedgerAccountsDeleteSecurity;
}(SpeakeasyBase));
export { LedgerAccountsDeleteSecurity };
var LedgerAccountsDeleteRequest = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeleteRequest, _super);
    function LedgerAccountsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsDeletePathParams)
    ], LedgerAccountsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsDeleteQueryParams)
    ], LedgerAccountsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsDeleteHeaders)
    ], LedgerAccountsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsDeleteSecurity)
    ], LedgerAccountsDeleteRequest.prototype, "security", void 0);
    return LedgerAccountsDeleteRequest;
}(SpeakeasyBase));
export { LedgerAccountsDeleteRequest };
var LedgerAccountsDeleteResponse = /** @class */ (function (_super) {
    __extends(LedgerAccountsDeleteResponse, _super);
    function LedgerAccountsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LedgerAccountsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LedgerAccountsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteLedgerAccountResponse)
    ], LedgerAccountsDeleteResponse.prototype, "deleteLedgerAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LedgerAccountsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LedgerAccountsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LedgerAccountsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LedgerAccountsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LedgerAccountsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LedgerAccountsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return LedgerAccountsDeleteResponse;
}(SpeakeasyBase));
export { LedgerAccountsDeleteResponse };
