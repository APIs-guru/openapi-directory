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
var ConnectionsAllQueryParams = /** @class */ (function (_super) {
    __extends(ConnectionsAllQueryParams, _super);
    function ConnectionsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api" }),
        __metadata("design:type", String)
    ], ConnectionsAllQueryParams.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configured" }),
        __metadata("design:type", Boolean)
    ], ConnectionsAllQueryParams.prototype, "configured", void 0);
    return ConnectionsAllQueryParams;
}(SpeakeasyBase));
export { ConnectionsAllQueryParams };
var ConnectionsAllHeaders = /** @class */ (function (_super) {
    __extends(ConnectionsAllHeaders, _super);
    function ConnectionsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectionsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ConnectionsAllHeaders.prototype, "xApideckConsumerId", void 0);
    return ConnectionsAllHeaders;
}(SpeakeasyBase));
export { ConnectionsAllHeaders };
var ConnectionsAllSecurity = /** @class */ (function (_super) {
    __extends(ConnectionsAllSecurity, _super);
    function ConnectionsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectionsAllSecurity.prototype, "apiKey", void 0);
    return ConnectionsAllSecurity;
}(SpeakeasyBase));
export { ConnectionsAllSecurity };
var ConnectionsAllRequest = /** @class */ (function (_super) {
    __extends(ConnectionsAllRequest, _super);
    function ConnectionsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAllQueryParams)
    ], ConnectionsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAllHeaders)
    ], ConnectionsAllRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectionsAllSecurity)
    ], ConnectionsAllRequest.prototype, "security", void 0);
    return ConnectionsAllRequest;
}(SpeakeasyBase));
export { ConnectionsAllRequest };
var ConnectionsAllResponse = /** @class */ (function (_super) {
    __extends(ConnectionsAllResponse, _super);
    function ConnectionsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ConnectionsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectionsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConnectionsResponse)
    ], ConnectionsAllResponse.prototype, "getConnectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectionsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectionsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectionsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectionsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectionsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ConnectionsAllResponse.prototype, "unprocessableResponse", void 0);
    return ConnectionsAllResponse;
}(SpeakeasyBase));
export { ConnectionsAllResponse };
