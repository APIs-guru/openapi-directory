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
var OpportunitiesUpdatePathParams = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdatePathParams, _super);
    function OpportunitiesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OpportunitiesUpdatePathParams.prototype, "id", void 0);
    return OpportunitiesUpdatePathParams;
}(SpeakeasyBase));
export { OpportunitiesUpdatePathParams };
var OpportunitiesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdateQueryParams, _super);
    function OpportunitiesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OpportunitiesUpdateQueryParams.prototype, "raw", void 0);
    return OpportunitiesUpdateQueryParams;
}(SpeakeasyBase));
export { OpportunitiesUpdateQueryParams };
var OpportunitiesUpdateHeaders = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdateHeaders, _super);
    function OpportunitiesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OpportunitiesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OpportunitiesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OpportunitiesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return OpportunitiesUpdateHeaders;
}(SpeakeasyBase));
export { OpportunitiesUpdateHeaders };
var OpportunitiesUpdateSecurity = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdateSecurity, _super);
    function OpportunitiesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OpportunitiesUpdateSecurity.prototype, "apiKey", void 0);
    return OpportunitiesUpdateSecurity;
}(SpeakeasyBase));
export { OpportunitiesUpdateSecurity };
var OpportunitiesUpdateRequest = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdateRequest, _super);
    function OpportunitiesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesUpdatePathParams)
    ], OpportunitiesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesUpdateQueryParams)
    ], OpportunitiesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesUpdateHeaders)
    ], OpportunitiesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Opportunity)
    ], OpportunitiesUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesUpdateSecurity)
    ], OpportunitiesUpdateRequest.prototype, "security", void 0);
    return OpportunitiesUpdateRequest;
}(SpeakeasyBase));
export { OpportunitiesUpdateRequest };
var OpportunitiesUpdateResponse = /** @class */ (function (_super) {
    __extends(OpportunitiesUpdateResponse, _super);
    function OpportunitiesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OpportunitiesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OpportunitiesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OpportunitiesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OpportunitiesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OpportunitiesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OpportunitiesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OpportunitiesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OpportunitiesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateOpportunityResponse)
    ], OpportunitiesUpdateResponse.prototype, "updateOpportunityResponse", void 0);
    return OpportunitiesUpdateResponse;
}(SpeakeasyBase));
export { OpportunitiesUpdateResponse };
