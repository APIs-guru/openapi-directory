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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ConsumerRequestCountsAllPathParams = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllPathParams, _super);
    function ConsumerRequestCountsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=consumer_id" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsAllPathParams.prototype, "consumerId", void 0);
    return ConsumerRequestCountsAllPathParams;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllPathParams };
var ConsumerRequestCountsAllQueryParams = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllQueryParams, _super);
    function ConsumerRequestCountsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_datetime" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsAllQueryParams.prototype, "endDatetime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_datetime" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsAllQueryParams.prototype, "startDatetime", void 0);
    return ConsumerRequestCountsAllQueryParams;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllQueryParams };
var ConsumerRequestCountsAllHeaders = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllHeaders, _super);
    function ConsumerRequestCountsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConsumerRequestCountsAllHeaders.prototype, "xApideckAppId", void 0);
    return ConsumerRequestCountsAllHeaders;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllHeaders };
var ConsumerRequestCountsAllSecurity = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllSecurity, _super);
    function ConsumerRequestCountsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConsumerRequestCountsAllSecurity.prototype, "apiKey", void 0);
    return ConsumerRequestCountsAllSecurity;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllSecurity };
var ConsumerRequestCountsAllRequest = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllRequest, _super);
    function ConsumerRequestCountsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConsumerRequestCountsAllPathParams)
    ], ConsumerRequestCountsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConsumerRequestCountsAllQueryParams)
    ], ConsumerRequestCountsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConsumerRequestCountsAllHeaders)
    ], ConsumerRequestCountsAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConsumerRequestCountsAllSecurity)
    ], ConsumerRequestCountsAllRequest.prototype, "security", void 0);
    return ConsumerRequestCountsAllRequest;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllRequest };
var ConsumerRequestCountsAllResponse = /** @class */ (function (_super) {
    __extends(ConsumerRequestCountsAllResponse, _super);
    function ConsumerRequestCountsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConsumerRequestCountsInDateRangeResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "consumerRequestCountsInDateRangeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConsumerRequestCountsAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConsumerRequestCountsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConsumerRequestCountsAllResponse.prototype, "unprocessableResponse", void 0);
    return ConsumerRequestCountsAllResponse;
}(SpeakeasyBase));
export { ConsumerRequestCountsAllResponse };
