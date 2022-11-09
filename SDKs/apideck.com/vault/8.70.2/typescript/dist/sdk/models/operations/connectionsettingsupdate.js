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
var ConnectionSettingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ConnectionSettingsUpdatePathParams, _super);
    function ConnectionSettingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdatePathParams.prototype, "resource", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdatePathParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdatePathParams.prototype, "unifiedApi", void 0);
    return ConnectionSettingsUpdatePathParams;
}(SpeakeasyBase));
export { ConnectionSettingsUpdatePathParams };
var ConnectionSettingsUpdateHeaders = /** @class */ (function (_super) {
    __extends(ConnectionSettingsUpdateHeaders, _super);
    function ConnectionSettingsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionSettingsUpdateHeaders;
}(SpeakeasyBase));
export { ConnectionSettingsUpdateHeaders };
var ConnectionSettingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ConnectionSettingsUpdateSecurity, _super);
    function ConnectionSettingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionSettingsUpdateSecurity.prototype, "apiKey", void 0);
    return ConnectionSettingsUpdateSecurity;
}(SpeakeasyBase));
export { ConnectionSettingsUpdateSecurity };
var ConnectionSettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(ConnectionSettingsUpdateRequest, _super);
    function ConnectionSettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionSettingsUpdatePathParams)
    ], ConnectionSettingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionSettingsUpdateHeaders)
    ], ConnectionSettingsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Connection)
    ], ConnectionSettingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionSettingsUpdateSecurity)
    ], ConnectionSettingsUpdateRequest.prototype, "security", void 0);
    return ConnectionSettingsUpdateRequest;
}(SpeakeasyBase));
export { ConnectionSettingsUpdateRequest };
var ConnectionSettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(ConnectionSettingsUpdateResponse, _super);
    function ConnectionSettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectionSettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectionSettingsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateConnectionResponse)
    ], ConnectionSettingsUpdateResponse.prototype, "updateConnectionResponse", void 0);
    return ConnectionSettingsUpdateResponse;
}(SpeakeasyBase));
export { ConnectionSettingsUpdateResponse };
