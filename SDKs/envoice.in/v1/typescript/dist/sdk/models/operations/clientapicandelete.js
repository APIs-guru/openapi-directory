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
var ClientApiCanDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ClientApiCanDeleteQueryParams, _super);
    function ClientApiCanDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], ClientApiCanDeleteQueryParams.prototype, "id", void 0);
    return ClientApiCanDeleteQueryParams;
}(SpeakeasyBase));
export { ClientApiCanDeleteQueryParams };
var ClientApiCanDeleteHeaders = /** @class */ (function (_super) {
    __extends(ClientApiCanDeleteHeaders, _super);
    function ClientApiCanDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], ClientApiCanDeleteHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], ClientApiCanDeleteHeaders.prototype, "xAuthSecret", void 0);
    return ClientApiCanDeleteHeaders;
}(SpeakeasyBase));
export { ClientApiCanDeleteHeaders };
var ClientApiCanDeleteRequest = /** @class */ (function (_super) {
    __extends(ClientApiCanDeleteRequest, _super);
    function ClientApiCanDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientApiCanDeleteQueryParams)
    ], ClientApiCanDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientApiCanDeleteHeaders)
    ], ClientApiCanDeleteRequest.prototype, "headers", void 0);
    return ClientApiCanDeleteRequest;
}(SpeakeasyBase));
export { ClientApiCanDeleteRequest };
var ClientApiCanDeleteResponse = /** @class */ (function (_super) {
    __extends(ClientApiCanDeleteResponse, _super);
    function ClientApiCanDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ClientApiCanDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ClientApiCanDeleteResponse.prototype, "clientApiCanDelete200ApplicationJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ClientApiCanDeleteResponse.prototype, "clientApiCanDelete200TextJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientApiCanDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClientApiCanDeleteResponse.prototype, "statusCode", void 0);
    return ClientApiCanDeleteResponse;
}(SpeakeasyBase));
export { ClientApiCanDeleteResponse };
