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
var ActivitiesDeletePathParams = /** @class */ (function (_super) {
    __extends(ActivitiesDeletePathParams, _super);
    function ActivitiesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ActivitiesDeletePathParams.prototype, "id", void 0);
    return ActivitiesDeletePathParams;
}(SpeakeasyBase));
export { ActivitiesDeletePathParams };
var ActivitiesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ActivitiesDeleteQueryParams, _super);
    function ActivitiesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ActivitiesDeleteQueryParams.prototype, "raw", void 0);
    return ActivitiesDeleteQueryParams;
}(SpeakeasyBase));
export { ActivitiesDeleteQueryParams };
var ActivitiesDeleteHeaders = /** @class */ (function (_super) {
    __extends(ActivitiesDeleteHeaders, _super);
    function ActivitiesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ActivitiesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ActivitiesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ActivitiesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return ActivitiesDeleteHeaders;
}(SpeakeasyBase));
export { ActivitiesDeleteHeaders };
var ActivitiesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ActivitiesDeleteSecurity, _super);
    function ActivitiesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ActivitiesDeleteSecurity.prototype, "apiKey", void 0);
    return ActivitiesDeleteSecurity;
}(SpeakeasyBase));
export { ActivitiesDeleteSecurity };
var ActivitiesDeleteRequest = /** @class */ (function (_super) {
    __extends(ActivitiesDeleteRequest, _super);
    function ActivitiesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesDeletePathParams)
    ], ActivitiesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesDeleteQueryParams)
    ], ActivitiesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesDeleteHeaders)
    ], ActivitiesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesDeleteSecurity)
    ], ActivitiesDeleteRequest.prototype, "security", void 0);
    return ActivitiesDeleteRequest;
}(SpeakeasyBase));
export { ActivitiesDeleteRequest };
var ActivitiesDeleteResponse = /** @class */ (function (_super) {
    __extends(ActivitiesDeleteResponse, _super);
    function ActivitiesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ActivitiesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivitiesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteActivityResponse)
    ], ActivitiesDeleteResponse.prototype, "deleteActivityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ActivitiesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ActivitiesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ActivitiesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ActivitiesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ActivitiesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return ActivitiesDeleteResponse;
}(SpeakeasyBase));
export { ActivitiesDeleteResponse };
