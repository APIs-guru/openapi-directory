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
var ConnectorResourcesOnePathParams = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOnePathParams, _super);
    function ConnectorResourcesOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ConnectorResourcesOnePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], ConnectorResourcesOnePathParams.prototype, "resourceId", void 0);
    return ConnectorResourcesOnePathParams;
}(SpeakeasyBase));
export { ConnectorResourcesOnePathParams };
var ConnectorResourcesOneQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOneQueryParams, _super);
    function ConnectorResourcesOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unified_api" }),
        __metadata("design:type", String)
    ], ConnectorResourcesOneQueryParams.prototype, "unifiedApi", void 0);
    return ConnectorResourcesOneQueryParams;
}(SpeakeasyBase));
export { ConnectorResourcesOneQueryParams };
var ConnectorResourcesOneHeaders = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOneHeaders, _super);
    function ConnectorResourcesOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ConnectorResourcesOneHeaders.prototype, "xApideckAppId", void 0);
    return ConnectorResourcesOneHeaders;
}(SpeakeasyBase));
export { ConnectorResourcesOneHeaders };
var ConnectorResourcesOneSecurity = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOneSecurity, _super);
    function ConnectorResourcesOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ConnectorResourcesOneSecurity.prototype, "apiKey", void 0);
    return ConnectorResourcesOneSecurity;
}(SpeakeasyBase));
export { ConnectorResourcesOneSecurity };
var ConnectorResourcesOneRequest = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOneRequest, _super);
    function ConnectorResourcesOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorResourcesOnePathParams)
    ], ConnectorResourcesOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorResourcesOneQueryParams)
    ], ConnectorResourcesOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorResourcesOneHeaders)
    ], ConnectorResourcesOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorResourcesOneSecurity)
    ], ConnectorResourcesOneRequest.prototype, "security", void 0);
    return ConnectorResourcesOneRequest;
}(SpeakeasyBase));
export { ConnectorResourcesOneRequest };
var ConnectorResourcesOneResponse = /** @class */ (function (_super) {
    __extends(ConnectorResourcesOneResponse, _super);
    function ConnectorResourcesOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorResourcesOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConnectorResourceResponse)
    ], ConnectorResourcesOneResponse.prototype, "getConnectorResourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ConnectorResourcesOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ConnectorResourcesOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorResourcesOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ConnectorResourcesOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ConnectorResourcesOneResponse.prototype, "unexpectedErrorResponse", void 0);
    return ConnectorResourcesOneResponse;
}(SpeakeasyBase));
export { ConnectorResourcesOneResponse };
