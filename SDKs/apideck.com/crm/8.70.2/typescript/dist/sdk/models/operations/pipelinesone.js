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
var PipelinesOnePathParams = /** @class */ (function (_super) {
    __extends(PipelinesOnePathParams, _super);
    function PipelinesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PipelinesOnePathParams.prototype, "id", void 0);
    return PipelinesOnePathParams;
}(SpeakeasyBase));
export { PipelinesOnePathParams };
var PipelinesOneQueryParams = /** @class */ (function (_super) {
    __extends(PipelinesOneQueryParams, _super);
    function PipelinesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], PipelinesOneQueryParams.prototype, "raw", void 0);
    return PipelinesOneQueryParams;
}(SpeakeasyBase));
export { PipelinesOneQueryParams };
var PipelinesOneHeaders = /** @class */ (function (_super) {
    __extends(PipelinesOneHeaders, _super);
    function PipelinesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PipelinesOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PipelinesOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PipelinesOneHeaders.prototype, "xApideckServiceId", void 0);
    return PipelinesOneHeaders;
}(SpeakeasyBase));
export { PipelinesOneHeaders };
var PipelinesOneSecurity = /** @class */ (function (_super) {
    __extends(PipelinesOneSecurity, _super);
    function PipelinesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PipelinesOneSecurity.prototype, "apiKey", void 0);
    return PipelinesOneSecurity;
}(SpeakeasyBase));
export { PipelinesOneSecurity };
var PipelinesOneRequest = /** @class */ (function (_super) {
    __extends(PipelinesOneRequest, _super);
    function PipelinesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesOnePathParams)
    ], PipelinesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesOneQueryParams)
    ], PipelinesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesOneHeaders)
    ], PipelinesOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesOneSecurity)
    ], PipelinesOneRequest.prototype, "security", void 0);
    return PipelinesOneRequest;
}(SpeakeasyBase));
export { PipelinesOneRequest };
var PipelinesOneResponse = /** @class */ (function (_super) {
    __extends(PipelinesOneResponse, _super);
    function PipelinesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], PipelinesOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PipelinesOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetPipelineResponse)
    ], PipelinesOneResponse.prototype, "getPipelineResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], PipelinesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], PipelinesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PipelinesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], PipelinesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], PipelinesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], PipelinesOneResponse.prototype, "unprocessableResponse", void 0);
    return PipelinesOneResponse;
}(SpeakeasyBase));
export { PipelinesOneResponse };
