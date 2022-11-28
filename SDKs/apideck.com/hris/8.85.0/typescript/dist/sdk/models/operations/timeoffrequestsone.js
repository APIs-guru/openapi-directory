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
var TimeOffRequestsOnePathParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOnePathParams, _super);
    function TimeOffRequestsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsOnePathParams.prototype, "id", void 0);
    return TimeOffRequestsOnePathParams;
}(SpeakeasyBase));
export { TimeOffRequestsOnePathParams };
var TimeOffRequestsOneQueryParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOneQueryParams, _super);
    function TimeOffRequestsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], TimeOffRequestsOneQueryParams.prototype, "raw", void 0);
    return TimeOffRequestsOneQueryParams;
}(SpeakeasyBase));
export { TimeOffRequestsOneQueryParams };
var TimeOffRequestsOneHeaders = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOneHeaders, _super);
    function TimeOffRequestsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsOneHeaders.prototype, "xApideckServiceId", void 0);
    return TimeOffRequestsOneHeaders;
}(SpeakeasyBase));
export { TimeOffRequestsOneHeaders };
var TimeOffRequestsOneSecurity = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOneSecurity, _super);
    function TimeOffRequestsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TimeOffRequestsOneSecurity.prototype, "apiKey", void 0);
    return TimeOffRequestsOneSecurity;
}(SpeakeasyBase));
export { TimeOffRequestsOneSecurity };
var TimeOffRequestsOneRequest = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOneRequest, _super);
    function TimeOffRequestsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsOnePathParams)
    ], TimeOffRequestsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsOneQueryParams)
    ], TimeOffRequestsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsOneHeaders)
    ], TimeOffRequestsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsOneSecurity)
    ], TimeOffRequestsOneRequest.prototype, "security", void 0);
    return TimeOffRequestsOneRequest;
}(SpeakeasyBase));
export { TimeOffRequestsOneRequest };
var TimeOffRequestsOneResponse = /** @class */ (function (_super) {
    __extends(TimeOffRequestsOneResponse, _super);
    function TimeOffRequestsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], TimeOffRequestsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TimeOffRequestsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetTimeOffRequestResponse)
    ], TimeOffRequestsOneResponse.prototype, "getTimeOffRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], TimeOffRequestsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], TimeOffRequestsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TimeOffRequestsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], TimeOffRequestsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], TimeOffRequestsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], TimeOffRequestsOneResponse.prototype, "unprocessableResponse", void 0);
    return TimeOffRequestsOneResponse;
}(SpeakeasyBase));
export { TimeOffRequestsOneResponse };
