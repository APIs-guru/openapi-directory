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
var ConnectionSettingsAllPathParams = /** @class */ (function (_super) {
    __extends(ConnectionSettingsAllPathParams, _super);
    function ConnectionSettingsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ConnectionSettingsAllPathParams.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsAllPathParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectionSettingsAllPathParams.prototype, "unifiedApi", void 0);
    return ConnectionSettingsAllPathParams;
}(SpeakeasyBase));
export { ConnectionSettingsAllPathParams };
var ConnectionSettingsAllHeaders = /** @class */ (function (_super) {
    __extends(ConnectionSettingsAllHeaders, _super);
    function ConnectionSettingsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionSettingsAllHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionSettingsAllHeaders;
}(SpeakeasyBase));
export { ConnectionSettingsAllHeaders };
var ConnectionSettingsAllSecurity = /** @class */ (function (_super) {
    __extends(ConnectionSettingsAllSecurity, _super);
    function ConnectionSettingsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionSettingsAllSecurity.prototype, "apiKey", void 0);
    return ConnectionSettingsAllSecurity;
}(SpeakeasyBase));
export { ConnectionSettingsAllSecurity };
var ConnectionSettingsAllRequest = /** @class */ (function (_super) {
    __extends(ConnectionSettingsAllRequest, _super);
    function ConnectionSettingsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionSettingsAllPathParams)
    ], ConnectionSettingsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionSettingsAllHeaders)
    ], ConnectionSettingsAllRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionSettingsAllSecurity)
    ], ConnectionSettingsAllRequest.prototype, "security", void 0);
    return ConnectionSettingsAllRequest;
}(SpeakeasyBase));
export { ConnectionSettingsAllRequest };
var ConnectionSettingsAllResponse = /** @class */ (function (_super) {
    __extends(ConnectionSettingsAllResponse, _super);
    function ConnectionSettingsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionSettingsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectionSettingsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConnectionResponse)
    ], ConnectionSettingsAllResponse.prototype, "getConnectionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionSettingsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionSettingsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectionSettingsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionSettingsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionSettingsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionSettingsAllResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionSettingsAllResponse;
}(SpeakeasyBase));
export { ConnectionSettingsAllResponse };
