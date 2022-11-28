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
var ActivitiesOnePathParams = /** @class */ (function (_super) {
    __extends(ActivitiesOnePathParams, _super);
    function ActivitiesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ActivitiesOnePathParams.prototype, "id", void 0);
    return ActivitiesOnePathParams;
}(SpeakeasyBase));
export { ActivitiesOnePathParams };
var ActivitiesOneQueryParams = /** @class */ (function (_super) {
    __extends(ActivitiesOneQueryParams, _super);
    function ActivitiesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ActivitiesOneQueryParams.prototype, "raw", void 0);
    return ActivitiesOneQueryParams;
}(SpeakeasyBase));
export { ActivitiesOneQueryParams };
var ActivitiesOneHeaders = /** @class */ (function (_super) {
    __extends(ActivitiesOneHeaders, _super);
    function ActivitiesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ActivitiesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ActivitiesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ActivitiesOneHeaders.prototype, "xApideckServiceId", void 0);
    return ActivitiesOneHeaders;
}(SpeakeasyBase));
export { ActivitiesOneHeaders };
var ActivitiesOneSecurity = /** @class */ (function (_super) {
    __extends(ActivitiesOneSecurity, _super);
    function ActivitiesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ActivitiesOneSecurity.prototype, "apiKey", void 0);
    return ActivitiesOneSecurity;
}(SpeakeasyBase));
export { ActivitiesOneSecurity };
var ActivitiesOneRequest = /** @class */ (function (_super) {
    __extends(ActivitiesOneRequest, _super);
    function ActivitiesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesOnePathParams)
    ], ActivitiesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesOneQueryParams)
    ], ActivitiesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesOneHeaders)
    ], ActivitiesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesOneSecurity)
    ], ActivitiesOneRequest.prototype, "security", void 0);
    return ActivitiesOneRequest;
}(SpeakeasyBase));
export { ActivitiesOneRequest };
var ActivitiesOneResponse = /** @class */ (function (_super) {
    __extends(ActivitiesOneResponse, _super);
    function ActivitiesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ActivitiesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivitiesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetActivityResponse)
    ], ActivitiesOneResponse.prototype, "getActivityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ActivitiesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ActivitiesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ActivitiesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ActivitiesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ActivitiesOneResponse.prototype, "unprocessableResponse", void 0);
    return ActivitiesOneResponse;
}(SpeakeasyBase));
export { ActivitiesOneResponse };
