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
// Product
/**
 * Contains details about a product.
**/
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivationUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "activationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Categories" }),
        __metadata("design:type", Array)
    ], Product.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName" }),
        __metadata("design:type", String)
    ], Product.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IntegrationTypes" }),
        __metadata("design:type", Array)
    ], Product.prototype, "integrationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketplaceUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "marketplaceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductArn" }),
        __metadata("design:type", String)
    ], Product.prototype, "productArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], Product.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductSubscriptionResourcePolicy" }),
        __metadata("design:type", String)
    ], Product.prototype, "productSubscriptionResourcePolicy", void 0);
    return Product;
}(SpeakeasyBase));
export { Product };
