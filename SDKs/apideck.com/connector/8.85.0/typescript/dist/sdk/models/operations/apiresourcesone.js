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
var ApiResourcesOnePathParams = /** @class */ (function (_super) {
    __extends(ApiResourcesOnePathParams, _super);
    function ApiResourcesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ApiResourcesOnePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], ApiResourcesOnePathParams.prototype, "resourceId", void 0);
    return ApiResourcesOnePathParams;
}(SpeakeasyBase));
export { ApiResourcesOnePathParams };
var ApiResourcesOneHeaders = /** @class */ (function (_super) {
    __extends(ApiResourcesOneHeaders, _super);
    function ApiResourcesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ApiResourcesOneHeaders.prototype, "xApideckAppId", void 0);
    return ApiResourcesOneHeaders;
}(SpeakeasyBase));
export { ApiResourcesOneHeaders };
var ApiResourcesOneSecurity = /** @class */ (function (_super) {
    __extends(ApiResourcesOneSecurity, _super);
    function ApiResourcesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ApiResourcesOneSecurity.prototype, "apiKey", void 0);
    return ApiResourcesOneSecurity;
}(SpeakeasyBase));
export { ApiResourcesOneSecurity };
var ApiResourcesOneRequest = /** @class */ (function (_super) {
    __extends(ApiResourcesOneRequest, _super);
    function ApiResourcesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourcesOnePathParams)
    ], ApiResourcesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourcesOneHeaders)
    ], ApiResourcesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApiResourcesOneSecurity)
    ], ApiResourcesOneRequest.prototype, "security", void 0);
    return ApiResourcesOneRequest;
}(SpeakeasyBase));
export { ApiResourcesOneRequest };
var ApiResourcesOneResponse = /** @class */ (function (_super) {
    __extends(ApiResourcesOneResponse, _super);
    function ApiResourcesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApiResourcesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetApiResourceResponse)
    ], ApiResourcesOneResponse.prototype, "getApiResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ApiResourcesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ApiResourcesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApiResourcesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ApiResourcesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ApiResourcesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    return ApiResourcesOneResponse;
}(SpeakeasyBase));
export { ApiResourcesOneResponse };
