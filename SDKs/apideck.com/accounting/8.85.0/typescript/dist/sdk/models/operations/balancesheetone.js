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
var BalanceSheetOneQueryParams = /** @class */ (function (_super) {
    __extends(BalanceSheetOneQueryParams, _super);
    function BalanceSheetOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.BalanceSheetFilter)
    ], BalanceSheetOneQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=pass_through" }),
        __metadata("design:type", Map)
    ], BalanceSheetOneQueryParams.prototype, "passThrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], BalanceSheetOneQueryParams.prototype, "raw", void 0);
    return BalanceSheetOneQueryParams;
}(SpeakeasyBase));
export { BalanceSheetOneQueryParams };
var BalanceSheetOneHeaders = /** @class */ (function (_super) {
    __extends(BalanceSheetOneHeaders, _super);
    function BalanceSheetOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], BalanceSheetOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], BalanceSheetOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], BalanceSheetOneHeaders.prototype, "xApideckServiceId", void 0);
    return BalanceSheetOneHeaders;
}(SpeakeasyBase));
export { BalanceSheetOneHeaders };
var BalanceSheetOneSecurity = /** @class */ (function (_super) {
    __extends(BalanceSheetOneSecurity, _super);
    function BalanceSheetOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BalanceSheetOneSecurity.prototype, "apiKey", void 0);
    return BalanceSheetOneSecurity;
}(SpeakeasyBase));
export { BalanceSheetOneSecurity };
var BalanceSheetOneRequest = /** @class */ (function (_super) {
    __extends(BalanceSheetOneRequest, _super);
    function BalanceSheetOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BalanceSheetOneQueryParams)
    ], BalanceSheetOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BalanceSheetOneHeaders)
    ], BalanceSheetOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BalanceSheetOneSecurity)
    ], BalanceSheetOneRequest.prototype, "security", void 0);
    return BalanceSheetOneRequest;
}(SpeakeasyBase));
export { BalanceSheetOneRequest };
var BalanceSheetOneResponse = /** @class */ (function (_super) {
    __extends(BalanceSheetOneResponse, _super);
    function BalanceSheetOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], BalanceSheetOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BalanceSheetOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBalanceSheetResponse)
    ], BalanceSheetOneResponse.prototype, "getBalanceSheetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], BalanceSheetOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], BalanceSheetOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BalanceSheetOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], BalanceSheetOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], BalanceSheetOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], BalanceSheetOneResponse.prototype, "unprocessableResponse", void 0);
    return BalanceSheetOneResponse;
}(SpeakeasyBase));
export { BalanceSheetOneResponse };
