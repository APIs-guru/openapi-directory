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
var GetApiInvoiceAllcategoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetApiInvoiceAllcategoriesQueryParams, _super);
    function GetApiInvoiceAllcategoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetApiInvoiceAllcategoriesQueryParams.prototype, "query", void 0);
    return GetApiInvoiceAllcategoriesQueryParams;
}(SpeakeasyBase));
export { GetApiInvoiceAllcategoriesQueryParams };
var GetApiInvoiceAllcategoriesHeaders = /** @class */ (function (_super) {
    __extends(GetApiInvoiceAllcategoriesHeaders, _super);
    function GetApiInvoiceAllcategoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], GetApiInvoiceAllcategoriesHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], GetApiInvoiceAllcategoriesHeaders.prototype, "xAuthSecret", void 0);
    return GetApiInvoiceAllcategoriesHeaders;
}(SpeakeasyBase));
export { GetApiInvoiceAllcategoriesHeaders };
var GetApiInvoiceAllcategoriesRequest = /** @class */ (function (_super) {
    __extends(GetApiInvoiceAllcategoriesRequest, _super);
    function GetApiInvoiceAllcategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiInvoiceAllcategoriesQueryParams)
    ], GetApiInvoiceAllcategoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiInvoiceAllcategoriesHeaders)
    ], GetApiInvoiceAllcategoriesRequest.prototype, "headers", void 0);
    return GetApiInvoiceAllcategoriesRequest;
}(SpeakeasyBase));
export { GetApiInvoiceAllcategoriesRequest };
var GetApiInvoiceAllcategoriesResponse = /** @class */ (function (_super) {
    __extends(GetApiInvoiceAllcategoriesResponse, _super);
    function GetApiInvoiceAllcategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiInvoiceAllcategoriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiInvoiceAllcategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResultInvoiceCategoryApiModel)
    ], GetApiInvoiceAllcategoriesResponse.prototype, "listResultInvoiceCategoryApiModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiInvoiceAllcategoriesResponse.prototype, "statusCode", void 0);
    return GetApiInvoiceAllcategoriesResponse;
}(SpeakeasyBase));
export { GetApiInvoiceAllcategoriesResponse };
