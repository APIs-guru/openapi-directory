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
import { Exclusion } from "./exclusion";
// ProductAdoptionPolicy
/**
 * This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
**/
var ProductAdoptionPolicy = /** @class */ (function (_super) {
    __extends(ProductAdoptionPolicy, _super);
    function ProductAdoptionPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], ProductAdoptionPolicy.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTreeId" }),
        __metadata("design:type", String)
    ], ProductAdoptionPolicy.prototype, "categoryTreeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusion" }),
        __metadata("design:type", Exclusion)
    ], ProductAdoptionPolicy.prototype, "exclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productRequired" }),
        __metadata("design:type", Boolean)
    ], ProductAdoptionPolicy.prototype, "productRequired", void 0);
    return ProductAdoptionPolicy;
}(SpeakeasyBase));
export { ProductAdoptionPolicy };
