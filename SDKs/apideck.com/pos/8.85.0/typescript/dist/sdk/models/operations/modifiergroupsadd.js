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
var ModifierGroupsAddQueryParams = /** @class */ (function (_super) {
    __extends(ModifierGroupsAddQueryParams, _super);
    function ModifierGroupsAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupsAddQueryParams.prototype, "raw", void 0);
    return ModifierGroupsAddQueryParams;
}(SpeakeasyBase));
export { ModifierGroupsAddQueryParams };
var ModifierGroupsAddHeaders = /** @class */ (function (_super) {
    __extends(ModifierGroupsAddHeaders, _super);
    function ModifierGroupsAddHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsAddHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsAddHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ModifierGroupsAddHeaders.prototype, "xApideckServiceId", void 0);
    return ModifierGroupsAddHeaders;
}(SpeakeasyBase));
export { ModifierGroupsAddHeaders };
var ModifierGroupsAddSecurity = /** @class */ (function (_super) {
    __extends(ModifierGroupsAddSecurity, _super);
    function ModifierGroupsAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ModifierGroupsAddSecurity.prototype, "apiKey", void 0);
    return ModifierGroupsAddSecurity;
}(SpeakeasyBase));
export { ModifierGroupsAddSecurity };
var ModifierGroupsAddRequest = /** @class */ (function (_super) {
    __extends(ModifierGroupsAddRequest, _super);
    function ModifierGroupsAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsAddQueryParams)
    ], ModifierGroupsAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsAddHeaders)
    ], ModifierGroupsAddRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifierGroupInput)
    ], ModifierGroupsAddRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifierGroupsAddSecurity)
    ], ModifierGroupsAddRequest.prototype, "security", void 0);
    return ModifierGroupsAddRequest;
}(SpeakeasyBase));
export { ModifierGroupsAddRequest };
var ModifierGroupsAddResponse = /** @class */ (function (_super) {
    __extends(ModifierGroupsAddResponse, _super);
    function ModifierGroupsAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ModifierGroupsAddResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifierGroupsAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateModifierGroupResponse)
    ], ModifierGroupsAddResponse.prototype, "createModifierGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ModifierGroupsAddResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ModifierGroupsAddResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifierGroupsAddResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ModifierGroupsAddResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ModifierGroupsAddResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ModifierGroupsAddResponse.prototype, "unprocessableResponse", void 0);
    return ModifierGroupsAddResponse;
}(SpeakeasyBase));
export { ModifierGroupsAddResponse };
