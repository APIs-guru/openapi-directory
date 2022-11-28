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
import { AppliedPromotion } from "./appliedpromotion";
import { DeliveryCost } from "./deliverycost";
import { Amount } from "./amount";
import { EbayCollectAndRemitTax } from "./ebaycollectandremittax";
import { GiftDetails } from "./giftdetails";
import { ItemLocation } from "./itemlocation";
import { LineItemFulfillmentInstructions } from "./lineitemfulfillmentinstructions";
import { LineItemProperties } from "./lineitemproperties";
import { LineItemRefund } from "./lineitemrefund";
import { Tax } from "./tax";
// LineItem
/**
 * This type contains the details of each line item in an order.
**/
var LineItem = /** @class */ (function (_super) {
    __extends(LineItem, _super);
    function LineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedPromotions", elemType: AppliedPromotion }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "appliedPromotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCost" }),
        __metadata("design:type", DeliveryCost)
    ], LineItem.prototype, "deliveryCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountedLineItemCost" }),
        __metadata("design:type", Amount)
    ], LineItem.prototype, "discountedLineItemCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebayCollectAndRemitTaxes", elemType: EbayCollectAndRemitTax }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "ebayCollectAndRemitTaxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=giftDetails" }),
        __metadata("design:type", GiftDetails)
    ], LineItem.prototype, "giftDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemLocation" }),
        __metadata("design:type", ItemLocation)
    ], LineItem.prototype, "itemLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyItemId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "legacyItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyVariationId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "legacyVariationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemCost" }),
        __metadata("design:type", Amount)
    ], LineItem.prototype, "lineItemCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemFulfillmentInstructions" }),
        __metadata("design:type", LineItemFulfillmentInstructions)
    ], LineItem.prototype, "lineItemFulfillmentInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemFulfillmentStatus" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "lineItemFulfillmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "lineItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listingMarketplaceId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "listingMarketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", LineItemProperties)
    ], LineItem.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseMarketplaceId" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "purchaseMarketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], LineItem.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds", elemType: LineItemRefund }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "refunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=soldFormat" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "soldFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxes", elemType: Tax }),
        __metadata("design:type", Array)
    ], LineItem.prototype, "taxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LineItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Amount)
    ], LineItem.prototype, "total", void 0);
    return LineItem;
}(SpeakeasyBase));
export { LineItem };
