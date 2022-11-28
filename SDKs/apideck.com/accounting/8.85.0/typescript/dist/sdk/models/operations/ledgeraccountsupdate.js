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
var LedgerAccountsUpdatePathParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdatePathParams, _super);
    function LedgerAccountsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LedgerAccountsUpdatePathParams.prototype, "id", void 0);
    return LedgerAccountsUpdatePathParams;
}(SpeakeasyBase));
export { LedgerAccountsUpdatePathParams };
var LedgerAccountsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdateQueryParams, _super);
    function LedgerAccountsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LedgerAccountsUpdateQueryParams.prototype, "raw", void 0);
    return LedgerAccountsUpdateQueryParams;
}(SpeakeasyBase));
export { LedgerAccountsUpdateQueryParams };
var LedgerAccountsUpdateHeaders = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdateHeaders, _super);
    function LedgerAccountsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LedgerAccountsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return LedgerAccountsUpdateHeaders;
}(SpeakeasyBase));
export { LedgerAccountsUpdateHeaders };
var LedgerAccountsUpdateSecurity = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdateSecurity, _super);
    function LedgerAccountsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LedgerAccountsUpdateSecurity.prototype, "apiKey", void 0);
    return LedgerAccountsUpdateSecurity;
}(SpeakeasyBase));
export { LedgerAccountsUpdateSecurity };
var LedgerAccountsUpdateRequest = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdateRequest, _super);
    function LedgerAccountsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsUpdatePathParams)
    ], LedgerAccountsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsUpdateQueryParams)
    ], LedgerAccountsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsUpdateHeaders)
    ], LedgerAccountsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], LedgerAccountsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LedgerAccountsUpdateSecurity)
    ], LedgerAccountsUpdateRequest.prototype, "security", void 0);
    return LedgerAccountsUpdateRequest;
}(SpeakeasyBase));
export { LedgerAccountsUpdateRequest };
var LedgerAccountsUpdateResponse = /** @class */ (function (_super) {
    __extends(LedgerAccountsUpdateResponse, _super);
    function LedgerAccountsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LedgerAccountsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LedgerAccountsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LedgerAccountsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LedgerAccountsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LedgerAccountsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LedgerAccountsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LedgerAccountsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LedgerAccountsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateLedgerAccountResponse)
    ], LedgerAccountsUpdateResponse.prototype, "updateLedgerAccountResponse", void 0);
    return LedgerAccountsUpdateResponse;
}(SpeakeasyBase));
export { LedgerAccountsUpdateResponse };
