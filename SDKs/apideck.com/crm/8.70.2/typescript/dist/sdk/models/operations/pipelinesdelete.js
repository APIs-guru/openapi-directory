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
var PipelinesDeletePathParams = /** @class */ (function (_super) {
    __extends(PipelinesDeletePathParams, _super);
    function PipelinesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PipelinesDeletePathParams.prototype, "id", void 0);
    return PipelinesDeletePathParams;
}(SpeakeasyBase));
export { PipelinesDeletePathParams };
var PipelinesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PipelinesDeleteQueryParams, _super);
    function PipelinesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], PipelinesDeleteQueryParams.prototype, "raw", void 0);
    return PipelinesDeleteQueryParams;
}(SpeakeasyBase));
export { PipelinesDeleteQueryParams };
var PipelinesDeleteHeaders = /** @class */ (function (_super) {
    __extends(PipelinesDeleteHeaders, _super);
    function PipelinesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PipelinesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PipelinesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PipelinesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return PipelinesDeleteHeaders;
}(SpeakeasyBase));
export { PipelinesDeleteHeaders };
var PipelinesDeleteSecurity = /** @class */ (function (_super) {
    __extends(PipelinesDeleteSecurity, _super);
    function PipelinesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PipelinesDeleteSecurity.prototype, "apiKey", void 0);
    return PipelinesDeleteSecurity;
}(SpeakeasyBase));
export { PipelinesDeleteSecurity };
var PipelinesDeleteRequest = /** @class */ (function (_super) {
    __extends(PipelinesDeleteRequest, _super);
    function PipelinesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesDeletePathParams)
    ], PipelinesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesDeleteQueryParams)
    ], PipelinesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesDeleteHeaders)
    ], PipelinesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PipelinesDeleteSecurity)
    ], PipelinesDeleteRequest.prototype, "security", void 0);
    return PipelinesDeleteRequest;
}(SpeakeasyBase));
export { PipelinesDeleteRequest };
var PipelinesDeleteResponse = /** @class */ (function (_super) {
    __extends(PipelinesDeleteResponse, _super);
    function PipelinesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], PipelinesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PipelinesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeletePipelineResponse)
    ], PipelinesDeleteResponse.prototype, "deletePipelineResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], PipelinesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], PipelinesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PipelinesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], PipelinesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], PipelinesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], PipelinesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return PipelinesDeleteResponse;
}(SpeakeasyBase));
export { PipelinesDeleteResponse };
