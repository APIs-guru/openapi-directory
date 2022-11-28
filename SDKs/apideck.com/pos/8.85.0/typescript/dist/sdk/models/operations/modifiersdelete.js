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
var ModifiersDeletePathParams = /** @class */ (function (_super) {
    __extends(ModifiersDeletePathParams, _super);
    function ModifiersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ModifiersDeletePathParams.prototype, "id", void 0);
    return ModifiersDeletePathParams;
}(SpeakeasyBase));
export { ModifiersDeletePathParams };
var ModifiersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ModifiersDeleteQueryParams, _super);
    function ModifiersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.ModifierGroupFilter)
    ], ModifiersDeleteQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ModifiersDeleteQueryParams.prototype, "raw", void 0);
    return ModifiersDeleteQueryParams;
}(SpeakeasyBase));
export { ModifiersDeleteQueryParams };
var ModifiersDeleteHeaders = /** @class */ (function (_super) {
    __extends(ModifiersDeleteHeaders, _super);
    function ModifiersDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ModifiersDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ModifiersDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ModifiersDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return ModifiersDeleteHeaders;
}(SpeakeasyBase));
export { ModifiersDeleteHeaders };
var ModifiersDeleteSecurity = /** @class */ (function (_super) {
    __extends(ModifiersDeleteSecurity, _super);
    function ModifiersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ModifiersDeleteSecurity.prototype, "apiKey", void 0);
    return ModifiersDeleteSecurity;
}(SpeakeasyBase));
export { ModifiersDeleteSecurity };
var ModifiersDeleteRequest = /** @class */ (function (_super) {
    __extends(ModifiersDeleteRequest, _super);
    function ModifiersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifiersDeletePathParams)
    ], ModifiersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifiersDeleteQueryParams)
    ], ModifiersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifiersDeleteHeaders)
    ], ModifiersDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifiersDeleteSecurity)
    ], ModifiersDeleteRequest.prototype, "security", void 0);
    return ModifiersDeleteRequest;
}(SpeakeasyBase));
export { ModifiersDeleteRequest };
var ModifiersDeleteResponse = /** @class */ (function (_super) {
    __extends(ModifiersDeleteResponse, _super);
    function ModifiersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ModifiersDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifiersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteModifierResponse)
    ], ModifiersDeleteResponse.prototype, "deleteModifierResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ModifiersDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ModifiersDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifiersDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ModifiersDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ModifiersDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ModifiersDeleteResponse.prototype, "unprocessableResponse", void 0);
    return ModifiersDeleteResponse;
}(SpeakeasyBase));
export { ModifiersDeleteResponse };
