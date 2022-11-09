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
var LeadsUpdatePathParams = /** @class */ (function (_super) {
    __extends(LeadsUpdatePathParams, _super);
    function LeadsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], LeadsUpdatePathParams.prototype, "id", void 0);
    return LeadsUpdatePathParams;
}(SpeakeasyBase));
export { LeadsUpdatePathParams };
var LeadsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LeadsUpdateQueryParams, _super);
    function LeadsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], LeadsUpdateQueryParams.prototype, "raw", void 0);
    return LeadsUpdateQueryParams;
}(SpeakeasyBase));
export { LeadsUpdateQueryParams };
var LeadsUpdateHeaders = /** @class */ (function (_super) {
    __extends(LeadsUpdateHeaders, _super);
    function LeadsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], LeadsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], LeadsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], LeadsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return LeadsUpdateHeaders;
}(SpeakeasyBase));
export { LeadsUpdateHeaders };
var LeadsUpdateSecurity = /** @class */ (function (_super) {
    __extends(LeadsUpdateSecurity, _super);
    function LeadsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LeadsUpdateSecurity.prototype, "apiKey", void 0);
    return LeadsUpdateSecurity;
}(SpeakeasyBase));
export { LeadsUpdateSecurity };
var LeadsUpdateRequest = /** @class */ (function (_super) {
    __extends(LeadsUpdateRequest, _super);
    function LeadsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsUpdatePathParams)
    ], LeadsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsUpdateQueryParams)
    ], LeadsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsUpdateHeaders)
    ], LeadsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Lead)
    ], LeadsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LeadsUpdateSecurity)
    ], LeadsUpdateRequest.prototype, "security", void 0);
    return LeadsUpdateRequest;
}(SpeakeasyBase));
export { LeadsUpdateRequest };
var LeadsUpdateResponse = /** @class */ (function (_super) {
    __extends(LeadsUpdateResponse, _super);
    function LeadsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], LeadsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LeadsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], LeadsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], LeadsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LeadsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], LeadsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], LeadsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], LeadsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateLeadResponse)
    ], LeadsUpdateResponse.prototype, "updateLeadResponse", void 0);
    return LeadsUpdateResponse;
}(SpeakeasyBase));
export { LeadsUpdateResponse };
