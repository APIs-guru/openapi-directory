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
import { SelectedInventoryDiscount } from "./selectedinventorydiscount";
// ItemPriceMarkdown
/**
 * This type defines the fields used to describe an item price markdown promotion.
**/
var ItemPriceMarkdown = /** @class */ (function (_super) {
    __extends(ItemPriceMarkdown, _super);
    function ItemPriceMarkdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyFreeShipping" }),
        __metadata("design:type", Boolean)
    ], ItemPriceMarkdown.prototype, "applyFreeShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoSelectFutureInventory" }),
        __metadata("design:type", Boolean)
    ], ItemPriceMarkdown.prototype, "autoSelectFutureInventory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockPriceIncreaseInItemRevision" }),
        __metadata("design:type", Boolean)
    ], ItemPriceMarkdown.prototype, "blockPriceIncreaseInItemRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionImageUrl" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "promotionImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionStatus" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "promotionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedInventoryDiscounts", elemType: SelectedInventoryDiscount }),
        __metadata("design:type", Array)
    ], ItemPriceMarkdown.prototype, "selectedInventoryDiscounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], ItemPriceMarkdown.prototype, "startDate", void 0);
    return ItemPriceMarkdown;
}(SpeakeasyBase));
export { ItemPriceMarkdown };
