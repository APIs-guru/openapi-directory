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
var FetchFieldsQueryParams = /** @class */ (function (_super) {
    __extends(FetchFieldsQueryParams, _super);
    function FetchFieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldName" }),
        __metadata("design:type", String)
    ], FetchFieldsQueryParams.prototype, "fieldName", void 0);
    return FetchFieldsQueryParams;
}(SpeakeasyBase));
export { FetchFieldsQueryParams };
var FetchFieldsHeaders = /** @class */ (function (_super) {
    __extends(FetchFieldsHeaders, _super);
    function FetchFieldsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], FetchFieldsHeaders.prototype, "xLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], FetchFieldsHeaders.prototype, "xNextToken", void 0);
    return FetchFieldsHeaders;
}(SpeakeasyBase));
export { FetchFieldsHeaders };
var FetchFieldsSecurity = /** @class */ (function (_super) {
    __extends(FetchFieldsSecurity, _super);
    function FetchFieldsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FetchFieldsSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], FetchFieldsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return FetchFieldsSecurity;
}(SpeakeasyBase));
export { FetchFieldsSecurity };
var FetchFieldsRequest = /** @class */ (function (_super) {
    __extends(FetchFieldsRequest, _super);
    function FetchFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldsQueryParams)
    ], FetchFieldsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldsHeaders)
    ], FetchFieldsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchFieldsSecurity)
    ], FetchFieldsRequest.prototype, "security", void 0);
    return FetchFieldsRequest;
}(SpeakeasyBase));
export { FetchFieldsRequest };
var FetchFieldsResponse = /** @class */ (function (_super) {
    __extends(FetchFieldsResponse, _super);
    function FetchFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FetchFieldsResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], FetchFieldsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FetchFieldsResponse.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FetchFieldsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchFieldsResponse.prototype, "statusCode", void 0);
    return FetchFieldsResponse;
}(SpeakeasyBase));
export { FetchFieldsResponse };
