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
var ConnectionsTokenPathParams = /** @class */ (function (_super) {
    __extends(ConnectionsTokenPathParams, _super);
    function ConnectionsTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionsTokenPathParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectionsTokenPathParams.prototype, "unifiedApi", void 0);
    return ConnectionsTokenPathParams;
}(SpeakeasyBase));
export { ConnectionsTokenPathParams };
var ConnectionsTokenHeaders = /** @class */ (function (_super) {
    __extends(ConnectionsTokenHeaders, _super);
    function ConnectionsTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionsTokenHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionsTokenHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionsTokenHeaders;
}(SpeakeasyBase));
export { ConnectionsTokenHeaders };
var ConnectionsTokenSecurity = /** @class */ (function (_super) {
    __extends(ConnectionsTokenSecurity, _super);
    function ConnectionsTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionsTokenSecurity.prototype, "apiKey", void 0);
    return ConnectionsTokenSecurity;
}(SpeakeasyBase));
export { ConnectionsTokenSecurity };
var ConnectionsTokenRequest = /** @class */ (function (_super) {
    __extends(ConnectionsTokenRequest, _super);
    function ConnectionsTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsTokenPathParams)
    ], ConnectionsTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsTokenHeaders)
    ], ConnectionsTokenRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ConnectionsTokenRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsTokenSecurity)
    ], ConnectionsTokenRequest.prototype, "security", void 0);
    return ConnectionsTokenRequest;
}(SpeakeasyBase));
export { ConnectionsTokenRequest };
var ConnectionsTokenResponse = /** @class */ (function (_super) {
    __extends(ConnectionsTokenResponse, _super);
    function ConnectionsTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsTokenResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectionsTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetConnectionResponse)
    ], ConnectionsTokenResponse.prototype, "getConnectionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsTokenResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsTokenResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectionsTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsTokenResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsTokenResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsTokenResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsTokenResponse;
}(SpeakeasyBase));
export { ConnectionsTokenResponse };
