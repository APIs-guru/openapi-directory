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
import { Buyer } from "./buyer";
import { ContactInformation } from "./contactinformation";
import { DeliveryControl } from "./deliverycontrol";
import { MarketplaceLabel } from "./marketplacelabel";
import { PublisherProvidedForecast } from "./publisherprovidedforecast";
import { Seller } from "./seller";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";
// Product
/**
 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
 *
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billedBuyer" }),
        __metadata("design:type", Buyer)
    ], Product.prototype, "billedBuyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", Buyer)
    ], Product.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTimeMs" }),
        __metadata("design:type", String)
    ], Product.prototype, "creationTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Product.prototype, "creatorContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorRole" }),
        __metadata("design:type", String)
    ], Product.prototype, "creatorRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryControl" }),
        __metadata("design:type", DeliveryControl)
    ], Product.prototype, "deliveryControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightEndTimeMs" }),
        __metadata("design:type", String)
    ], Product.prototype, "flightEndTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightStartTimeMs" }),
        __metadata("design:type", String)
    ], Product.prototype, "flightStartTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasCreatorSignedOff" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "hasCreatorSignedOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySource" }),
        __metadata("design:type", String)
    ], Product.prototype, "inventorySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Product.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: MarketplaceLabel }),
        __metadata("design:type", Array)
    ], Product.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTimeMs" }),
        __metadata("design:type", String)
    ], Product.prototype, "lastUpdateTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyOfferId" }),
        __metadata("design:type", String)
    ], Product.prototype, "legacyOfferId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplacePublisherProfileId" }),
        __metadata("design:type", String)
    ], Product.prototype, "marketplacePublisherProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateAuctionId" }),
        __metadata("design:type", String)
    ], Product.prototype, "privateAuctionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], Product.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProfileId" }),
        __metadata("design:type", String)
    ], Product.prototype, "publisherProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProvidedForecast" }),
        __metadata("design:type", PublisherProvidedForecast)
    ], Product.prototype, "publisherProvidedForecast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionNumber" }),
        __metadata("design:type", String)
    ], Product.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", Seller)
    ], Product.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedTargetings", elemType: SharedTargeting }),
        __metadata("design:type", Array)
    ], Product.prototype, "sharedTargetings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Product.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], Product.prototype, "syndicationProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", DealTerms)
    ], Product.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], Product.prototype, "webPropertyCode", void 0);
    return Product;
}(SpeakeasyBase));
export { Product };
