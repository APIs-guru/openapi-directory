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
var ProfitAndLossOneQueryParams = /** @class */ (function (_super) {
    __extends(ProfitAndLossOneQueryParams, _super);
    function ProfitAndLossOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.ProfitAndLossFilter)
    ], ProfitAndLossOneQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ProfitAndLossOneQueryParams.prototype, "raw", void 0);
    return ProfitAndLossOneQueryParams;
}(SpeakeasyBase));
export { ProfitAndLossOneQueryParams };
var ProfitAndLossOneHeaders = /** @class */ (function (_super) {
    __extends(ProfitAndLossOneHeaders, _super);
    function ProfitAndLossOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ProfitAndLossOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ProfitAndLossOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ProfitAndLossOneHeaders.prototype, "xApideckServiceId", void 0);
    return ProfitAndLossOneHeaders;
}(SpeakeasyBase));
export { ProfitAndLossOneHeaders };
var ProfitAndLossOneSecurity = /** @class */ (function (_super) {
    __extends(ProfitAndLossOneSecurity, _super);
    function ProfitAndLossOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ProfitAndLossOneSecurity.prototype, "apiKey", void 0);
    return ProfitAndLossOneSecurity;
}(SpeakeasyBase));
export { ProfitAndLossOneSecurity };
var ProfitAndLossOneRequest = /** @class */ (function (_super) {
    __extends(ProfitAndLossOneRequest, _super);
    function ProfitAndLossOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProfitAndLossOneQueryParams)
    ], ProfitAndLossOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProfitAndLossOneHeaders)
    ], ProfitAndLossOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProfitAndLossOneSecurity)
    ], ProfitAndLossOneRequest.prototype, "security", void 0);
    return ProfitAndLossOneRequest;
}(SpeakeasyBase));
export { ProfitAndLossOneRequest };
var ProfitAndLossOneResponse = /** @class */ (function (_super) {
    __extends(ProfitAndLossOneResponse, _super);
    function ProfitAndLossOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ProfitAndLossOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProfitAndLossOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetProfitAndLossResponse)
    ], ProfitAndLossOneResponse.prototype, "getProfitAndLossResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ProfitAndLossOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ProfitAndLossOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProfitAndLossOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ProfitAndLossOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ProfitAndLossOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ProfitAndLossOneResponse.prototype, "unprocessableResponse", void 0);
    return ProfitAndLossOneResponse;
}(SpeakeasyBase));
export { ProfitAndLossOneResponse };
