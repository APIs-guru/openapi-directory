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
var PipelinesUpdatePathParams = /** @class */ (function (_super) {
    __extends(PipelinesUpdatePathParams, _super);
    function PipelinesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PipelinesUpdatePathParams.prototype, "id", void 0);
    return PipelinesUpdatePathParams;
}(SpeakeasyBase));
export { PipelinesUpdatePathParams };
var PipelinesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PipelinesUpdateQueryParams, _super);
    function PipelinesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], PipelinesUpdateQueryParams.prototype, "raw", void 0);
    return PipelinesUpdateQueryParams;
}(SpeakeasyBase));
export { PipelinesUpdateQueryParams };
var PipelinesUpdateHeaders = /** @class */ (function (_super) {
    __extends(PipelinesUpdateHeaders, _super);
    function PipelinesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PipelinesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PipelinesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PipelinesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return PipelinesUpdateHeaders;
}(SpeakeasyBase));
export { PipelinesUpdateHeaders };
var PipelinesUpdateSecurity = /** @class */ (function (_super) {
    __extends(PipelinesUpdateSecurity, _super);
    function PipelinesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PipelinesUpdateSecurity.prototype, "apiKey", void 0);
    return PipelinesUpdateSecurity;
}(SpeakeasyBase));
export { PipelinesUpdateSecurity };
var PipelinesUpdateRequest = /** @class */ (function (_super) {
    __extends(PipelinesUpdateRequest, _super);
    function PipelinesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesUpdatePathParams)
    ], PipelinesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesUpdateQueryParams)
    ], PipelinesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesUpdateHeaders)
    ], PipelinesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Pipeline)
    ], PipelinesUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesUpdateSecurity)
    ], PipelinesUpdateRequest.prototype, "security", void 0);
    return PipelinesUpdateRequest;
}(SpeakeasyBase));
export { PipelinesUpdateRequest };
var PipelinesUpdateResponse = /** @class */ (function (_super) {
    __extends(PipelinesUpdateResponse, _super);
    function PipelinesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], PipelinesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PipelinesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], PipelinesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], PipelinesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PipelinesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], PipelinesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], PipelinesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], PipelinesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdatePipelineResponse)
    ], PipelinesUpdateResponse.prototype, "updatePipelineResponse", void 0);
    return PipelinesUpdateResponse;
}(SpeakeasyBase));
export { PipelinesUpdateResponse };
