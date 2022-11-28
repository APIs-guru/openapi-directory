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
import { CurrencyEnum } from "./currencyenum";
export var ItemPricingTypeEnum;
(function (ItemPricingTypeEnum) {
    ItemPricingTypeEnum["Fixed"] = "fixed";
    ItemPricingTypeEnum["Variable"] = "variable";
    ItemPricingTypeEnum["PerUnit"] = "per_unit";
    ItemPricingTypeEnum["Other"] = "other";
})(ItemPricingTypeEnum || (ItemPricingTypeEnum = {}));
export var ItemProductTypeEnum;
(function (ItemProductTypeEnum) {
    ItemProductTypeEnum["Regular"] = "regular";
    ItemProductTypeEnum["Other"] = "other";
})(ItemProductTypeEnum || (ItemProductTypeEnum = {}));
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], Item.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absent_at_location_ids" }),
        __metadata("design:type", Array)
    ], Item.prototype, "absentAtLocationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_pickup" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "availableForPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_online" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "availableOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], Item.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Item.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], Item.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Item.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Item.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Item.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Item.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], Item.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifier_groups" }),
        __metadata("design:type", Array)
    ], Item.prototype, "modifierGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Item.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], Item.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=present_at_all_locations" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "presentAtAllLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_amount" }),
        __metadata("design:type", Number)
    ], Item.prototype, "priceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_currency" }),
        __metadata("design:type", String)
    ], Item.prototype, "priceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing_type" }),
        __metadata("design:type", String)
    ], Item.prototype, "pricingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], Item.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], Item.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_ids" }),
        __metadata("design:type", Array)
    ], Item.prototype, "taxIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Item.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Item.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variations" }),
        __metadata("design:type", Array)
    ], Item.prototype, "variations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Item.prototype, "version", void 0);
    return Item;
}(SpeakeasyBase));
export { Item };
var ItemInput = /** @class */ (function (_super) {
    __extends(ItemInput, _super);
    function ItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abbreviation" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absent_at_location_ids" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "absentAtLocationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_pickup" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "availableForPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_online" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "availableOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], ItemInput.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifier_groups" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "modifierGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=present_at_all_locations" }),
        __metadata("design:type", Boolean)
    ], ItemInput.prototype, "presentAtAllLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_amount" }),
        __metadata("design:type", Number)
    ], ItemInput.prototype, "priceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_currency" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "priceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing_type" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "pricingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_type" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], ItemInput.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_ids" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "taxIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variations" }),
        __metadata("design:type", Array)
    ], ItemInput.prototype, "variations", void 0);
    return ItemInput;
}(SpeakeasyBase));
export { ItemInput };
