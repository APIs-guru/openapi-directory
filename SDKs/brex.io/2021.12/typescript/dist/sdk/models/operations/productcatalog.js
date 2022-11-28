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
var ProductCatalogPathParams = /** @class */ (function (_super) {
    __extends(ProductCatalogPathParams, _super);
    function ProductCatalogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], ProductCatalogPathParams.prototype, "country", void 0);
    return ProductCatalogPathParams;
}(SpeakeasyBase));
export { ProductCatalogPathParams };
var ProductCatalogSecurity = /** @class */ (function (_super) {
    __extends(ProductCatalogSecurity, _super);
    function ProductCatalogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductCatalogSecurity.prototype, "userKey", void 0);
    return ProductCatalogSecurity;
}(SpeakeasyBase));
export { ProductCatalogSecurity };
var ProductCatalogRequest = /** @class */ (function (_super) {
    __extends(ProductCatalogRequest, _super);
    function ProductCatalogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductCatalogPathParams)
    ], ProductCatalogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProductCatalogSecurity)
    ], ProductCatalogRequest.prototype, "security", void 0);
    return ProductCatalogRequest;
}(SpeakeasyBase));
export { ProductCatalogRequest };
var ProductCatalogResponse = /** @class */ (function (_super) {
    __extends(ProductCatalogResponse, _super);
    function ProductCatalogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProductCatalogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductCatalogResponse.prototype, "productCatalog200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ProductCatalogResponse.prototype, "productCatalogDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProductCatalogResponse.prototype, "statusCode", void 0);
    return ProductCatalogResponse;
}(SpeakeasyBase));
export { ProductCatalogResponse };
