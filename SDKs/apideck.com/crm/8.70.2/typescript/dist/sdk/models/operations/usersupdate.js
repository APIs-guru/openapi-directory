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
var UsersUpdatePathParams = /** @class */ (function (_super) {
    __extends(UsersUpdatePathParams, _super);
    function UsersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UsersUpdatePathParams.prototype, "id", void 0);
    return UsersUpdatePathParams;
}(SpeakeasyBase));
export { UsersUpdatePathParams };
var UsersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(UsersUpdateQueryParams, _super);
    function UsersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], UsersUpdateQueryParams.prototype, "raw", void 0);
    return UsersUpdateQueryParams;
}(SpeakeasyBase));
export { UsersUpdateQueryParams };
var UsersUpdateHeaders = /** @class */ (function (_super) {
    __extends(UsersUpdateHeaders, _super);
    function UsersUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], UsersUpdateHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], UsersUpdateHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], UsersUpdateHeaders.prototype, "xApideckServiceId", void 0);
    return UsersUpdateHeaders;
}(SpeakeasyBase));
export { UsersUpdateHeaders };
var UsersUpdateSecurity = /** @class */ (function (_super) {
    __extends(UsersUpdateSecurity, _super);
    function UsersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UsersUpdateSecurity.prototype, "apiKey", void 0);
    return UsersUpdateSecurity;
}(SpeakeasyBase));
export { UsersUpdateSecurity };
var UsersUpdateRequest = /** @class */ (function (_super) {
    __extends(UsersUpdateRequest, _super);
    function UsersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdatePathParams)
    ], UsersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdateQueryParams)
    ], UsersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdateHeaders)
    ], UsersUpdateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.User)
    ], UsersUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UsersUpdateSecurity)
    ], UsersUpdateRequest.prototype, "security", void 0);
    return UsersUpdateRequest;
}(SpeakeasyBase));
export { UsersUpdateRequest };
var UsersUpdateResponse = /** @class */ (function (_super) {
    __extends(UsersUpdateResponse, _super);
    function UsersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], UsersUpdateResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UsersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], UsersUpdateResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], UsersUpdateResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UsersUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], UsersUpdateResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], UsersUpdateResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], UsersUpdateResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateUserResponse)
    ], UsersUpdateResponse.prototype, "updateUserResponse", void 0);
    return UsersUpdateResponse;
}(SpeakeasyBase));
export { UsersUpdateResponse };
