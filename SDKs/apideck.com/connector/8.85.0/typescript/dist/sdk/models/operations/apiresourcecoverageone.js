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
var ApiResourceCoverageOnePathParams = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageOnePathParams, _super);
    function ApiResourceCoverageOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ApiResourceCoverageOnePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], ApiResourceCoverageOnePathParams.prototype, "resourceId", void 0);
    return ApiResourceCoverageOnePathParams;
}(SpeakeasyBase));
export { ApiResourceCoverageOnePathParams };
var ApiResourceCoverageOneHeaders = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageOneHeaders, _super);
    function ApiResourceCoverageOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ApiResourceCoverageOneHeaders.prototype, "xApideckAppId", void 0);
    return ApiResourceCoverageOneHeaders;
}(SpeakeasyBase));
export { ApiResourceCoverageOneHeaders };
var ApiResourceCoverageOneSecurity = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageOneSecurity, _super);
    function ApiResourceCoverageOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ApiResourceCoverageOneSecurity.prototype, "apiKey", void 0);
    return ApiResourceCoverageOneSecurity;
}(SpeakeasyBase));
export { ApiResourceCoverageOneSecurity };
var ApiResourceCoverageOneRequest = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageOneRequest, _super);
    function ApiResourceCoverageOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourceCoverageOnePathParams)
    ], ApiResourceCoverageOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourceCoverageOneHeaders)
    ], ApiResourceCoverageOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourceCoverageOneSecurity)
    ], ApiResourceCoverageOneRequest.prototype, "security", void 0);
    return ApiResourceCoverageOneRequest;
}(SpeakeasyBase));
export { ApiResourceCoverageOneRequest };
var ApiResourceCoverageOneResponse = /** @class */ (function (_super) {
    __extends(ApiResourceCoverageOneResponse, _super);
    function ApiResourceCoverageOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiResourceCoverageOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetApiResourceCoverageResponse)
    ], ApiResourceCoverageOneResponse.prototype, "getApiResourceCoverageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ApiResourceCoverageOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ApiResourceCoverageOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiResourceCoverageOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ApiResourceCoverageOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ApiResourceCoverageOneResponse.prototype, "unexpectedErrorResponse", void 0);
    return ApiResourceCoverageOneResponse;
}(SpeakeasyBase));
export { ApiResourceCoverageOneResponse };
