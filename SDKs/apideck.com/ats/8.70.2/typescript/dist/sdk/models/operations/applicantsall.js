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
var ApplicantsAllQueryParams = /** @class */ (function (_super) {
    __extends(ApplicantsAllQueryParams, _super);
    function ApplicantsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ApplicantsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.JobsFilter)
    ], ApplicantsAllQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ApplicantsAllQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ApplicantsAllQueryParams.prototype, "raw", void 0);
    return ApplicantsAllQueryParams;
}(SpeakeasyBase));
export { ApplicantsAllQueryParams };
var ApplicantsAllHeaders = /** @class */ (function (_super) {
    __extends(ApplicantsAllHeaders, _super);
    function ApplicantsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ApplicantsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ApplicantsAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ApplicantsAllHeaders.prototype, "xApideckServiceId", void 0);
    return ApplicantsAllHeaders;
}(SpeakeasyBase));
export { ApplicantsAllHeaders };
var ApplicantsAllSecurity = /** @class */ (function (_super) {
    __extends(ApplicantsAllSecurity, _super);
    function ApplicantsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ApplicantsAllSecurity.prototype, "apiKey", void 0);
    return ApplicantsAllSecurity;
}(SpeakeasyBase));
export { ApplicantsAllSecurity };
var ApplicantsAllRequest = /** @class */ (function (_super) {
    __extends(ApplicantsAllRequest, _super);
    function ApplicantsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApplicantsAllQueryParams)
    ], ApplicantsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApplicantsAllHeaders)
    ], ApplicantsAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApplicantsAllSecurity)
    ], ApplicantsAllRequest.prototype, "security", void 0);
    return ApplicantsAllRequest;
}(SpeakeasyBase));
export { ApplicantsAllRequest };
var ApplicantsAllResponse = /** @class */ (function (_super) {
    __extends(ApplicantsAllResponse, _super);
    function ApplicantsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ApplicantsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApplicantsAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetApplicantsResponse)
    ], ApplicantsAllResponse.prototype, "getApplicantsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ApplicantsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ApplicantsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApplicantsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ApplicantsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ApplicantsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ApplicantsAllResponse.prototype, "unprocessableResponse", void 0);
    return ApplicantsAllResponse;
}(SpeakeasyBase));
export { ApplicantsAllResponse };
