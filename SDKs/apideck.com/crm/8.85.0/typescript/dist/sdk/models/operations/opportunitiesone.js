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
var OpportunitiesOnePathParams = /** @class */ (function (_super) {
    __extends(OpportunitiesOnePathParams, _super);
    function OpportunitiesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OpportunitiesOnePathParams.prototype, "id", void 0);
    return OpportunitiesOnePathParams;
}(SpeakeasyBase));
export { OpportunitiesOnePathParams };
var OpportunitiesOneQueryParams = /** @class */ (function (_super) {
    __extends(OpportunitiesOneQueryParams, _super);
    function OpportunitiesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OpportunitiesOneQueryParams.prototype, "raw", void 0);
    return OpportunitiesOneQueryParams;
}(SpeakeasyBase));
export { OpportunitiesOneQueryParams };
var OpportunitiesOneHeaders = /** @class */ (function (_super) {
    __extends(OpportunitiesOneHeaders, _super);
    function OpportunitiesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OpportunitiesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OpportunitiesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OpportunitiesOneHeaders.prototype, "xApideckServiceId", void 0);
    return OpportunitiesOneHeaders;
}(SpeakeasyBase));
export { OpportunitiesOneHeaders };
var OpportunitiesOneSecurity = /** @class */ (function (_super) {
    __extends(OpportunitiesOneSecurity, _super);
    function OpportunitiesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OpportunitiesOneSecurity.prototype, "apiKey", void 0);
    return OpportunitiesOneSecurity;
}(SpeakeasyBase));
export { OpportunitiesOneSecurity };
var OpportunitiesOneRequest = /** @class */ (function (_super) {
    __extends(OpportunitiesOneRequest, _super);
    function OpportunitiesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpportunitiesOnePathParams)
    ], OpportunitiesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpportunitiesOneQueryParams)
    ], OpportunitiesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpportunitiesOneHeaders)
    ], OpportunitiesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpportunitiesOneSecurity)
    ], OpportunitiesOneRequest.prototype, "security", void 0);
    return OpportunitiesOneRequest;
}(SpeakeasyBase));
export { OpportunitiesOneRequest };
var OpportunitiesOneResponse = /** @class */ (function (_super) {
    __extends(OpportunitiesOneResponse, _super);
    function OpportunitiesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OpportunitiesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OpportunitiesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetOpportunityResponse)
    ], OpportunitiesOneResponse.prototype, "getOpportunityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OpportunitiesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OpportunitiesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OpportunitiesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OpportunitiesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OpportunitiesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OpportunitiesOneResponse.prototype, "unprocessableResponse", void 0);
    return OpportunitiesOneResponse;
}(SpeakeasyBase));
export { OpportunitiesOneResponse };
