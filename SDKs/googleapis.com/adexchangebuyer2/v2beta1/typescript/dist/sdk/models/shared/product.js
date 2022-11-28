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
import { ContactInformation } from "./contactinformation";
import { Seller } from "./seller";
import { TargetingCriteria } from "./targetingcriteria";
import { DealTerms } from "./dealterms";
export var ProductSyndicationProductEnum;
(function (ProductSyndicationProductEnum) {
    ProductSyndicationProductEnum["SyndicationProductUnspecified"] = "SYNDICATION_PRODUCT_UNSPECIFIED";
    ProductSyndicationProductEnum["Content"] = "CONTENT";
    ProductSyndicationProductEnum["Mobile"] = "MOBILE";
    ProductSyndicationProductEnum["Video"] = "VIDEO";
    ProductSyndicationProductEnum["Games"] = "GAMES";
})(ProductSyndicationProductEnum || (ProductSyndicationProductEnum = {}));
// Product
/**
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
**/
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableEndTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "availableEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableStartTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "availableStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Product.prototype, "creatorContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Product.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasCreatorSignedOff" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "hasCreatorSignedOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], Product.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productRevision" }),
        __metadata("design:type", String)
    ], Product.prototype, "productRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProfileId" }),
        __metadata("design:type", String)
    ], Product.prototype, "publisherProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", Seller)
    ], Product.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], Product.prototype, "syndicationProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria }),
        __metadata("design:type", Array)
    ], Product.prototype, "targetingCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", DealTerms)
    ], Product.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], Product.prototype, "webPropertyCode", void 0);
    return Product;
}(SpeakeasyBase));
export { Product };
