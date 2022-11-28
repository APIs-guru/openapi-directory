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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var TimeOffRequestsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdatePathParams, _super);
    function TimeOffRequestsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsUpdatePathParams.prototype, "id", void 0);
    return TimeOffRequestsUpdatePathParams;
}(SpeakeasyBase));
export { TimeOffRequestsUpdatePathParams };
var TimeOffRequestsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdateQueryParams, _super);
    function TimeOffRequestsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], TimeOffRequestsUpdateQueryParams.prototype, "raw", void 0);
    return TimeOffRequestsUpdateQueryParams;
}(SpeakeasyBase));
export { TimeOffRequestsUpdateQueryParams };
var TimeOffRequestsUpdateHeaders = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdateHeaders, _super);
    function TimeOffRequestsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return TimeOffRequestsUpdateHeaders;
}(SpeakeasyBase));
export { TimeOffRequestsUpdateHeaders };
var TimeOffRequestsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdateSecurity, _super);
    function TimeOffRequestsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TimeOffRequestsUpdateSecurity.prototype, "apiKey", void 0);
    return TimeOffRequestsUpdateSecurity;
}(SpeakeasyBase));
export { TimeOffRequestsUpdateSecurity };
var TimeOffRequestsUpdateRequest = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdateRequest, _super);
    function TimeOffRequestsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsUpdatePathParams)
    ], TimeOffRequestsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsUpdateQueryParams)
    ], TimeOffRequestsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsUpdateHeaders)
    ], TimeOffRequestsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TimeOffRequestInput)
    ], TimeOffRequestsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TimeOffRequestsUpdateSecurity)
    ], TimeOffRequestsUpdateRequest.prototype, "security", void 0);
    return TimeOffRequestsUpdateRequest;
}(SpeakeasyBase));
export { TimeOffRequestsUpdateRequest };
var TimeOffRequestsUpdateResponse = /** @class */ (function (_super) {
    __extends(TimeOffRequestsUpdateResponse, _super);
    function TimeOffRequestsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TimeOffRequestsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TimeOffRequestsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateTimeOffRequestResponse)
    ], TimeOffRequestsUpdateResponse.prototype, "updateTimeOffRequestResponse", void 0);
    return TimeOffRequestsUpdateResponse;
}(SpeakeasyBase));
export { TimeOffRequestsUpdateResponse };
