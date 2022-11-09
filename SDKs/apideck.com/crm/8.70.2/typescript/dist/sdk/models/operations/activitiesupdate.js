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
var ActivitiesUpdatePathParams = /** @class */ (function (_super) {
    __extends(ActivitiesUpdatePathParams, _super);
    function ActivitiesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ActivitiesUpdatePathParams.prototype, "id", void 0);
    return ActivitiesUpdatePathParams;
}(SpeakeasyBase));
export { ActivitiesUpdatePathParams };
var ActivitiesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ActivitiesUpdateQueryParams, _super);
    function ActivitiesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ActivitiesUpdateQueryParams.prototype, "raw", void 0);
    return ActivitiesUpdateQueryParams;
}(SpeakeasyBase));
export { ActivitiesUpdateQueryParams };
var ActivitiesUpdateHeaders = /** @class */ (function (_super) {
    __extends(ActivitiesUpdateHeaders, _super);
    function ActivitiesUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ActivitiesUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ActivitiesUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ActivitiesUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return ActivitiesUpdateHeaders;
}(SpeakeasyBase));
export { ActivitiesUpdateHeaders };
var ActivitiesUpdateSecurity = /** @class */ (function (_super) {
    __extends(ActivitiesUpdateSecurity, _super);
    function ActivitiesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ActivitiesUpdateSecurity.prototype, "apiKey", void 0);
    return ActivitiesUpdateSecurity;
}(SpeakeasyBase));
export { ActivitiesUpdateSecurity };
var ActivitiesUpdateRequest = /** @class */ (function (_super) {
    __extends(ActivitiesUpdateRequest, _super);
    function ActivitiesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesUpdatePathParams)
    ], ActivitiesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesUpdateQueryParams)
    ], ActivitiesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesUpdateHeaders)
    ], ActivitiesUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Activity)
    ], ActivitiesUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ActivitiesUpdateSecurity)
    ], ActivitiesUpdateRequest.prototype, "security", void 0);
    return ActivitiesUpdateRequest;
}(SpeakeasyBase));
export { ActivitiesUpdateRequest };
var ActivitiesUpdateResponse = /** @class */ (function (_super) {
    __extends(ActivitiesUpdateResponse, _super);
    function ActivitiesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ActivitiesUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ActivitiesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ActivitiesUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ActivitiesUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ActivitiesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ActivitiesUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ActivitiesUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ActivitiesUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateActivityResponse)
    ], ActivitiesUpdateResponse.prototype, "updateActivityResponse", void 0);
    return ActivitiesUpdateResponse;
}(SpeakeasyBase));
export { ActivitiesUpdateResponse };
