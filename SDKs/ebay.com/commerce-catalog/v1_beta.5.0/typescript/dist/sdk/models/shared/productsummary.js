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
import { Image } from "./image";
import { Aspect } from "./aspect";
// ProductSummary
/**
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
**/
var ProductSummary = /** @class */ (function (_super) {
    __extends(ProductSummary, _super);
    function ProductSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalImages", elemType: Image }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "additionalImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aspects", elemType: Aspect }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "aspects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], ProductSummary.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ean" }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "ean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=epid" }),
        __metadata("design:type", String)
    ], ProductSummary.prototype, "epid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], ProductSummary.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbn" }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "isbn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpn" }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "mpn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productHref" }),
        __metadata("design:type", String)
    ], ProductSummary.prototype, "productHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productWebUrl" }),
        __metadata("design:type", String)
    ], ProductSummary.prototype, "productWebUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProductSummary.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upc" }),
        __metadata("design:type", Array)
    ], ProductSummary.prototype, "upc", void 0);
    return ProductSummary;
}(SpeakeasyBase));
export { ProductSummary };
