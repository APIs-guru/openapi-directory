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
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
import { DestinyDestinyUnlockStatus } from "./destinydestinyunlockstatus";
// DestinyEntitiesVendorsDestinyVendorSaleItemComponent
/**
 * Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
**/
var DestinyEntitiesVendorsDestinyVendorSaleItemComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesVendorsDestinyVendorSaleItemComponent, _super);
    function DestinyEntitiesVendorsDestinyVendorSaleItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "apiPurchasable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "augments", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity }),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "costs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "failureIndexes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "itemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "itemValueVisibility", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "overrideNextRefreshDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "overrideStyleItemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "requiredUnlocks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "saleStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyUnlockStatus }),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "unlockStatuses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorSaleItemComponent.prototype, "vendorItemIndex", void 0);
    return DestinyEntitiesVendorsDestinyVendorSaleItemComponent;
}(SpeakeasyBase));
export { DestinyEntitiesVendorsDestinyVendorSaleItemComponent };
