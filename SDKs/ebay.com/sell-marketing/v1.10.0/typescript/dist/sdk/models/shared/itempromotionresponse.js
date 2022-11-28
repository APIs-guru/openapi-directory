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
import { Amount } from "./amount";
import { CouponConfiguration } from "./couponconfiguration";
import { DiscountRule } from "./discountrule";
import { InventoryCriterion } from "./inventorycriterion";
// ItemPromotionResponse
/**
 * This complex type defines the fields returned for an item (threshold) promotion.
**/
var ItemPromotionResponse = /** @class */ (function (_super) {
    __extends(ItemPromotionResponse, _super);
    function ItemPromotionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyDiscountToSingleItemOnly" }),
        __metadata("design:type", Boolean)
    ], ItemPromotionResponse.prototype, "applyDiscountToSingleItemOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", Amount)
    ], ItemPromotionResponse.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=couponConfiguration" }),
        __metadata("design:type", CouponConfiguration)
    ], ItemPromotionResponse.prototype, "couponConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountRules", elemType: DiscountRule }),
        __metadata("design:type", Array)
    ], ItemPromotionResponse.prototype, "discountRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryCriterion" }),
        __metadata("design:type", InventoryCriterion)
    ], ItemPromotionResponse.prototype, "inventoryCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionId" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "promotionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionImageUrl" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "promotionImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionStatus" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "promotionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionType" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "promotionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], ItemPromotionResponse.prototype, "startDate", void 0);
    return ItemPromotionResponse;
}(SpeakeasyBase));
export { ItemPromotionResponse };
