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
var ModifierGroupsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdatePathParams, _super);
    function ModifierGroupsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ModifierGroupsUpdatePathParams.prototype, "id", void 0);
    return ModifierGroupsUpdatePathParams;
}(SpeakeasyBase));
export { ModifierGroupsUpdatePathParams };
var ModifierGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdateQueryParams, _super);
    function ModifierGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupsUpdateQueryParams.prototype, "raw", void 0);
    return ModifierGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { ModifierGroupsUpdateQueryParams };
var ModifierGroupsUpdateHeaders = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdateHeaders, _super);
    function ModifierGroupsUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return ModifierGroupsUpdateHeaders;
}(SpeakeasyBase));
export { ModifierGroupsUpdateHeaders };
var ModifierGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdateSecurity, _super);
    function ModifierGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ModifierGroupsUpdateSecurity.prototype, "apiKey", void 0);
    return ModifierGroupsUpdateSecurity;
}(SpeakeasyBase));
export { ModifierGroupsUpdateSecurity };
var ModifierGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdateRequest, _super);
    function ModifierGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsUpdatePathParams)
    ], ModifierGroupsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsUpdateQueryParams)
    ], ModifierGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsUpdateHeaders)
    ], ModifierGroupsUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifierGroupInput)
    ], ModifierGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsUpdateSecurity)
    ], ModifierGroupsUpdateRequest.prototype, "security", void 0);
    return ModifierGroupsUpdateRequest;
}(SpeakeasyBase));
export { ModifierGroupsUpdateRequest };
var ModifierGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(ModifierGroupsUpdateResponse, _super);
    function ModifierGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ModifierGroupsUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifierGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ModifierGroupsUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ModifierGroupsUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifierGroupsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ModifierGroupsUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ModifierGroupsUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ModifierGroupsUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateModifierGroupResponse)
    ], ModifierGroupsUpdateResponse.prototype, "updateModifierGroupResponse", void 0);
    return ModifierGroupsUpdateResponse;
}(SpeakeasyBase));
export { ModifierGroupsUpdateResponse };
