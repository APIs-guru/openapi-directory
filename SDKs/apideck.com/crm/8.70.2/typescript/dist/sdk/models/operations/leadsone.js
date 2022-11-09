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
var LeadsOnePathParams = /** @class */ (function (_super) {
    __extends(LeadsOnePathParams, _super);
    function LeadsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LeadsOnePathParams.prototype, "id", void 0);
    return LeadsOnePathParams;
}(SpeakeasyBase));
export { LeadsOnePathParams };
var LeadsOneQueryParams = /** @class */ (function (_super) {
    __extends(LeadsOneQueryParams, _super);
    function LeadsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LeadsOneQueryParams.prototype, "raw", void 0);
    return LeadsOneQueryParams;
}(SpeakeasyBase));
export { LeadsOneQueryParams };
var LeadsOneHeaders = /** @class */ (function (_super) {
    __extends(LeadsOneHeaders, _super);
    function LeadsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LeadsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LeadsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LeadsOneHeaders.prototype, "xApideckServiceId", void 0);
    return LeadsOneHeaders;
}(SpeakeasyBase));
export { LeadsOneHeaders };
var LeadsOneSecurity = /** @class */ (function (_super) {
    __extends(LeadsOneSecurity, _super);
    function LeadsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LeadsOneSecurity.prototype, "apiKey", void 0);
    return LeadsOneSecurity;
}(SpeakeasyBase));
export { LeadsOneSecurity };
var LeadsOneRequest = /** @class */ (function (_super) {
    __extends(LeadsOneRequest, _super);
    function LeadsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsOnePathParams)
    ], LeadsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsOneQueryParams)
    ], LeadsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsOneHeaders)
    ], LeadsOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsOneSecurity)
    ], LeadsOneRequest.prototype, "security", void 0);
    return LeadsOneRequest;
}(SpeakeasyBase));
export { LeadsOneRequest };
var LeadsOneResponse = /** @class */ (function (_super) {
    __extends(LeadsOneResponse, _super);
    function LeadsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LeadsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LeadsOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetLeadResponse)
    ], LeadsOneResponse.prototype, "getLeadResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LeadsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LeadsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LeadsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LeadsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LeadsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LeadsOneResponse.prototype, "unprocessableResponse", void 0);
    return LeadsOneResponse;
}(SpeakeasyBase));
export { LeadsOneResponse };
