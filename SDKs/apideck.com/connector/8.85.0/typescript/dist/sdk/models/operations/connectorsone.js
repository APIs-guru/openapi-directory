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
var ConnectorsOnePathParams = /** @class */ (function (_super) {
    __extends(ConnectorsOnePathParams, _super);
    function ConnectorsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ConnectorsOnePathParams.prototype, "id", void 0);
    return ConnectorsOnePathParams;
}(SpeakeasyBase));
export { ConnectorsOnePathParams };
var ConnectorsOneHeaders = /** @class */ (function (_super) {
    __extends(ConnectorsOneHeaders, _super);
    function ConnectorsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectorsOneHeaders.prototype, "xApideckAppId", void 0);
    return ConnectorsOneHeaders;
}(SpeakeasyBase));
export { ConnectorsOneHeaders };
var ConnectorsOneSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsOneSecurity, _super);
    function ConnectorsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectorsOneSecurity.prototype, "apiKey", void 0);
    return ConnectorsOneSecurity;
}(SpeakeasyBase));
export { ConnectorsOneSecurity };
var ConnectorsOneRequest = /** @class */ (function (_super) {
    __extends(ConnectorsOneRequest, _super);
    function ConnectorsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsOnePathParams)
    ], ConnectorsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsOneHeaders)
    ], ConnectorsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsOneSecurity)
    ], ConnectorsOneRequest.prototype, "security", void 0);
    return ConnectorsOneRequest;
}(SpeakeasyBase));
export { ConnectorsOneRequest };
var ConnectorsOneResponse = /** @class */ (function (_super) {
    __extends(ConnectorsOneResponse, _super);
    function ConnectorsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConnectorResponse)
    ], ConnectorsOneResponse.prototype, "getConnectorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectorsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectorsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectorsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectorsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    return ConnectorsOneResponse;
}(SpeakeasyBase));
export { ConnectorsOneResponse };
