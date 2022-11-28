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
var ConnectionsAddPathParams = /** @class */ (function (_super) {
    __extends(ConnectionsAddPathParams, _super);
    function ConnectionsAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], ConnectionsAddPathParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectionsAddPathParams.prototype, "unifiedApi", void 0);
    return ConnectionsAddPathParams;
}(SpeakeasyBase));
export { ConnectionsAddPathParams };
var ConnectionsAddHeaders = /** @class */ (function (_super) {
    __extends(ConnectionsAddHeaders, _super);
    function ConnectionsAddHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionsAddHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionsAddHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionsAddHeaders;
}(SpeakeasyBase));
export { ConnectionsAddHeaders };
var ConnectionsAddSecurity = /** @class */ (function (_super) {
    __extends(ConnectionsAddSecurity, _super);
    function ConnectionsAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionsAddSecurity.prototype, "apiKey", void 0);
    return ConnectionsAddSecurity;
}(SpeakeasyBase));
export { ConnectionsAddSecurity };
var ConnectionsAddRequest = /** @class */ (function (_super) {
    __extends(ConnectionsAddRequest, _super);
    function ConnectionsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAddPathParams)
    ], ConnectionsAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAddHeaders)
    ], ConnectionsAddRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectionInput)
    ], ConnectionsAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAddSecurity)
    ], ConnectionsAddRequest.prototype, "security", void 0);
    return ConnectionsAddRequest;
}(SpeakeasyBase));
export { ConnectionsAddRequest };
var ConnectionsAddResponse = /** @class */ (function (_super) {
    __extends(ConnectionsAddResponse, _super);
    function ConnectionsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsAddResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectionsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateConnectionResponse)
    ], ConnectionsAddResponse.prototype, "createConnectionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsAddResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsAddResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectionsAddResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsAddResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsAddResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsAddResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsAddResponse;
}(SpeakeasyBase));
export { ConnectionsAddResponse };
