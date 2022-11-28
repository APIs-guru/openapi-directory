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
var ModifierGroupsDeletePathParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeletePathParams, _super);
    function ModifierGroupsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ModifierGroupsDeletePathParams.prototype, "id", void 0);
    return ModifierGroupsDeletePathParams;
}(SpeakeasyBase));
export { ModifierGroupsDeletePathParams };
var ModifierGroupsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeleteQueryParams, _super);
    function ModifierGroupsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupsDeleteQueryParams.prototype, "raw", void 0);
    return ModifierGroupsDeleteQueryParams;
}(SpeakeasyBase));
export { ModifierGroupsDeleteQueryParams };
var ModifierGroupsDeleteHeaders = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeleteHeaders, _super);
    function ModifierGroupsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return ModifierGroupsDeleteHeaders;
}(SpeakeasyBase));
export { ModifierGroupsDeleteHeaders };
var ModifierGroupsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeleteSecurity, _super);
    function ModifierGroupsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ModifierGroupsDeleteSecurity.prototype, "apiKey", void 0);
    return ModifierGroupsDeleteSecurity;
}(SpeakeasyBase));
export { ModifierGroupsDeleteSecurity };
var ModifierGroupsDeleteRequest = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeleteRequest, _super);
    function ModifierGroupsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsDeletePathParams)
    ], ModifierGroupsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsDeleteQueryParams)
    ], ModifierGroupsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsDeleteHeaders)
    ], ModifierGroupsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsDeleteSecurity)
    ], ModifierGroupsDeleteRequest.prototype, "security", void 0);
    return ModifierGroupsDeleteRequest;
}(SpeakeasyBase));
export { ModifierGroupsDeleteRequest };
var ModifierGroupsDeleteResponse = /** @class */ (function (_super) {
    __extends(ModifierGroupsDeleteResponse, _super);
    function ModifierGroupsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ModifierGroupsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifierGroupsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteModifierGroupResponse)
    ], ModifierGroupsDeleteResponse.prototype, "deleteModifierGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ModifierGroupsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ModifierGroupsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifierGroupsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ModifierGroupsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ModifierGroupsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ModifierGroupsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return ModifierGroupsDeleteResponse;
}(SpeakeasyBase));
export { ModifierGroupsDeleteResponse };
