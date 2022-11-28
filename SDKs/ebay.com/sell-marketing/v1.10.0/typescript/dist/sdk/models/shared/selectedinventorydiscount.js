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
import { DiscountBenefit } from "./discountbenefit";
import { InventoryCriterion } from "./inventorycriterion";
// SelectedInventoryDiscount
/**
 * This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
**/
var SelectedInventoryDiscount = /** @class */ (function (_super) {
    __extends(SelectedInventoryDiscount, _super);
    function SelectedInventoryDiscount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountBenefit" }),
        __metadata("design:type", DiscountBenefit)
    ], SelectedInventoryDiscount.prototype, "discountBenefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountId" }),
        __metadata("design:type", String)
    ], SelectedInventoryDiscount.prototype, "discountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryCriterion" }),
        __metadata("design:type", InventoryCriterion)
    ], SelectedInventoryDiscount.prototype, "inventoryCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleOrder" }),
        __metadata("design:type", Number)
    ], SelectedInventoryDiscount.prototype, "ruleOrder", void 0);
    return SelectedInventoryDiscount;
}(SpeakeasyBase));
export { SelectedInventoryDiscount };
