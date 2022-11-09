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
var ConnectionsOnePathParams = /** @class */ (function (_super) {
    __extends(ConnectionsOnePathParams, _super);
    function ConnectionsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionsOnePathParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectionsOnePathParams.prototype, "unifiedApi", void 0);
    return ConnectionsOnePathParams;
}(SpeakeasyBase));
export { ConnectionsOnePathParams };
var ConnectionsOneHeaders = /** @class */ (function (_super) {
    __extends(ConnectionsOneHeaders, _super);
    function ConnectionsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionsOneHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionsOneHeaders;
}(SpeakeasyBase));
export { ConnectionsOneHeaders };
var ConnectionsOneSecurity = /** @class */ (function (_super) {
    __extends(ConnectionsOneSecurity, _super);
    function ConnectionsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionsOneSecurity.prototype, "apiKey", void 0);
    return ConnectionsOneSecurity;
}(SpeakeasyBase));
export { ConnectionsOneSecurity };
var ConnectionsOneRequest = /** @class */ (function (_super) {
    __extends(ConnectionsOneRequest, _super);
    function ConnectionsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsOnePathParams)
    ], ConnectionsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsOneHeaders)
    ], ConnectionsOneRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectionsOneSecurity)
    ], ConnectionsOneRequest.prototype, "security", void 0);
    return ConnectionsOneRequest;
}(SpeakeasyBase));
export { ConnectionsOneRequest };
var ConnectionsOneResponse = /** @class */ (function (_super) {
    __extends(ConnectionsOneResponse, _super);
    function ConnectionsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectionsOneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetConnectionResponse)
    ], ConnectionsOneResponse.prototype, "getConnectionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectionsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsOneResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsOneResponse;
}(SpeakeasyBase));
export { ConnectionsOneResponse };
