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
var ModifierGroupsOnePathParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsOnePathParams, _super);
    function ModifierGroupsOnePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ModifierGroupsOnePathParams.prototype, "id", void 0);
    return ModifierGroupsOnePathParams;
}(SpeakeasyBase));
export { ModifierGroupsOnePathParams };
var ModifierGroupsOneQueryParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsOneQueryParams, _super);
    function ModifierGroupsOneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupsOneQueryParams.prototype, "raw", void 0);
    return ModifierGroupsOneQueryParams;
}(SpeakeasyBase));
export { ModifierGroupsOneQueryParams };
var ModifierGroupsOneHeaders = /** @class */ (function (_super) {
    __extends(ModifierGroupsOneHeaders, _super);
    function ModifierGroupsOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsOneHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsOneHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsOneHeaders.prototype, "xApideckServiceId", void 0);
    return ModifierGroupsOneHeaders;
}(SpeakeasyBase));
export { ModifierGroupsOneHeaders };
var ModifierGroupsOneSecurity = /** @class */ (function (_super) {
    __extends(ModifierGroupsOneSecurity, _super);
    function ModifierGroupsOneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ModifierGroupsOneSecurity.prototype, "apiKey", void 0);
    return ModifierGroupsOneSecurity;
}(SpeakeasyBase));
export { ModifierGroupsOneSecurity };
var ModifierGroupsOneRequest = /** @class */ (function (_super) {
    __extends(ModifierGroupsOneRequest, _super);
    function ModifierGroupsOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsOnePathParams)
    ], ModifierGroupsOneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsOneQueryParams)
    ], ModifierGroupsOneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsOneHeaders)
    ], ModifierGroupsOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsOneSecurity)
    ], ModifierGroupsOneRequest.prototype, "security", void 0);
    return ModifierGroupsOneRequest;
}(SpeakeasyBase));
export { ModifierGroupsOneRequest };
var ModifierGroupsOneResponse = /** @class */ (function (_super) {
    __extends(ModifierGroupsOneResponse, _super);
    function ModifierGroupsOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ModifierGroupsOneResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifierGroupsOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetModifierGroupResponse)
    ], ModifierGroupsOneResponse.prototype, "getModifierGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ModifierGroupsOneResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ModifierGroupsOneResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifierGroupsOneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ModifierGroupsOneResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ModifierGroupsOneResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ModifierGroupsOneResponse.prototype, "unprocessableResponse", void 0);
    return ModifierGroupsOneResponse;
}(SpeakeasyBase));
export { ModifierGroupsOneResponse };
