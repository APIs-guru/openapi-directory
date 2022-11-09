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
var GetV3ProductsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ProductsQueryParams, _super);
    function GetV3ProductsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ProductsQueryParams.prototype, "fields", void 0);
    return GetV3ProductsQueryParams;
}(SpeakeasyBase));
export { GetV3ProductsQueryParams };
var GetV3ProductsHeaders = /** @class */ (function (_super) {
    __extends(GetV3ProductsHeaders, _super);
    function GetV3ProductsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ProductsHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ProductsHeaders;
}(SpeakeasyBase));
export { GetV3ProductsHeaders };
var GetV3ProductsRequest = /** @class */ (function (_super) {
    __extends(GetV3ProductsRequest, _super);
    function GetV3ProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ProductsQueryParams)
    ], GetV3ProductsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3ProductsHeaders)
    ], GetV3ProductsRequest.prototype, "headers", void 0);
    return GetV3ProductsRequest;
}(SpeakeasyBase));
export { GetV3ProductsRequest };
var GetV3ProductsResponse = /** @class */ (function (_super) {
    __extends(GetV3ProductsResponse, _super);
    function GetV3ProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3ProductsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProductsResult)
    ], GetV3ProductsResponse.prototype, "productsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3ProductsResponse.prototype, "statusCode", void 0);
    return GetV3ProductsResponse;
}(SpeakeasyBase));
export { GetV3ProductsResponse };
