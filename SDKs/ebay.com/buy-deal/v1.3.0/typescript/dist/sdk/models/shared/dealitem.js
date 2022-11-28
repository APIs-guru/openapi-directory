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
import { MarketingPrice } from "./marketingprice";
import { Amount } from "./amount";
import { ShippingOption } from "./shippingoption";
// DealItem
/**
 * The detailed data returned for the deal item.
**/
var DealItem = /** @class */ (function (_super) {
    __extends(DealItem, _super);
    function DealItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalImages", elemType: Image }),
        __metadata("design:type", Array)
    ], DealItem.prototype, "additionalImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryAncestorIds" }),
        __metadata("design:type", Array)
    ], DealItem.prototype, "categoryAncestorIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commissionable" }),
        __metadata("design:type", Boolean)
    ], DealItem.prototype, "commissionable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealAffiliateWebUrl" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "dealAffiliateWebUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealEndDate" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "dealEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealStartDate" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "dealStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealWebUrl" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "dealWebUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=energyEfficiencyClass" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "energyEfficiencyClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Image)
    ], DealItem.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemAffiliateWebUrl" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "itemAffiliateWebUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupType" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "itemGroupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemWebUrl" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "itemWebUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyItemId" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "legacyItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketingPrice" }),
        __metadata("design:type", MarketingPrice)
    ], DealItem.prototype, "marketingPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Amount)
    ], DealItem.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qualifiedPrograms" }),
        __metadata("design:type", Array)
    ], DealItem.prototype, "qualifiedPrograms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingOptions", elemType: ShippingOption }),
        __metadata("design:type", Array)
    ], DealItem.prototype, "shippingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitPrice" }),
        __metadata("design:type", Amount)
    ], DealItem.prototype, "unitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitPricingMeasure" }),
        __metadata("design:type", String)
    ], DealItem.prototype, "unitPricingMeasure", void 0);
    return DealItem;
}(SpeakeasyBase));
export { DealItem };
