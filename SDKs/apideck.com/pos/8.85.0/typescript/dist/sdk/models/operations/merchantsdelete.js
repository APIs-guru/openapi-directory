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
var MerchantsDeletePathParams = /** @class */ (function (_super) {
    __extends(MerchantsDeletePathParams, _super);
    function MerchantsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MerchantsDeletePathParams.prototype, "id", void 0);
    return MerchantsDeletePathParams;
}(SpeakeasyBase));
export { MerchantsDeletePathParams };
var MerchantsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MerchantsDeleteQueryParams, _super);
    function MerchantsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], MerchantsDeleteQueryParams.prototype, "raw", void 0);
    return MerchantsDeleteQueryParams;
}(SpeakeasyBase));
export { MerchantsDeleteQueryParams };
var MerchantsDeleteHeaders = /** @class */ (function (_super) {
    __extends(MerchantsDeleteHeaders, _super);
    function MerchantsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], MerchantsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], MerchantsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], MerchantsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return MerchantsDeleteHeaders;
}(SpeakeasyBase));
export { MerchantsDeleteHeaders };
var MerchantsDeleteSecurity = /** @class */ (function (_super) {
    __extends(MerchantsDeleteSecurity, _super);
    function MerchantsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MerchantsDeleteSecurity.prototype, "apiKey", void 0);
    return MerchantsDeleteSecurity;
}(SpeakeasyBase));
export { MerchantsDeleteSecurity };
var MerchantsDeleteRequest = /** @class */ (function (_super) {
    __extends(MerchantsDeleteRequest, _super);
    function MerchantsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantsDeletePathParams)
    ], MerchantsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantsDeleteQueryParams)
    ], MerchantsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantsDeleteHeaders)
    ], MerchantsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantsDeleteSecurity)
    ], MerchantsDeleteRequest.prototype, "security", void 0);
    return MerchantsDeleteRequest;
}(SpeakeasyBase));
export { MerchantsDeleteRequest };
var MerchantsDeleteResponse = /** @class */ (function (_super) {
    __extends(MerchantsDeleteResponse, _super);
    function MerchantsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], MerchantsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MerchantsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteMerchantResponse)
    ], MerchantsDeleteResponse.prototype, "deleteMerchantResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], MerchantsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], MerchantsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MerchantsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], MerchantsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], MerchantsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], MerchantsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return MerchantsDeleteResponse;
}(SpeakeasyBase));
export { MerchantsDeleteResponse };
