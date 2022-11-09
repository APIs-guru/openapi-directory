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
var PipelinesAddQueryParams = /** @class */ (function (_super) {
    __extends(PipelinesAddQueryParams, _super);
    function PipelinesAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], PipelinesAddQueryParams.prototype, "raw", void 0);
    return PipelinesAddQueryParams;
}(SpeakeasyBase));
export { PipelinesAddQueryParams };
var PipelinesAddHeaders = /** @class */ (function (_super) {
    __extends(PipelinesAddHeaders, _super);
    function PipelinesAddHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PipelinesAddHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PipelinesAddHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PipelinesAddHeaders.prototype, "xApideckServiceId", void 0);
    return PipelinesAddHeaders;
}(SpeakeasyBase));
export { PipelinesAddHeaders };
var PipelinesAddSecurity = /** @class */ (function (_super) {
    __extends(PipelinesAddSecurity, _super);
    function PipelinesAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PipelinesAddSecurity.prototype, "apiKey", void 0);
    return PipelinesAddSecurity;
}(SpeakeasyBase));
export { PipelinesAddSecurity };
var PipelinesAddRequest = /** @class */ (function (_super) {
    __extends(PipelinesAddRequest, _super);
    function PipelinesAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesAddQueryParams)
    ], PipelinesAddRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesAddHeaders)
    ], PipelinesAddRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pipeline)
    ], PipelinesAddRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesAddSecurity)
    ], PipelinesAddRequest.prototype, "security", void 0);
    return PipelinesAddRequest;
}(SpeakeasyBase));
export { PipelinesAddRequest };
var PipelinesAddResponse = /** @class */ (function (_super) {
    __extends(PipelinesAddResponse, _super);
    function PipelinesAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], PipelinesAddResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PipelinesAddResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreatePipelineResponse)
    ], PipelinesAddResponse.prototype, "createPipelineResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], PipelinesAddResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], PipelinesAddResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PipelinesAddResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], PipelinesAddResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], PipelinesAddResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], PipelinesAddResponse.prototype, "unprocessableResponse", void 0);
    return PipelinesAddResponse;
}(SpeakeasyBase));
export { PipelinesAddResponse };
