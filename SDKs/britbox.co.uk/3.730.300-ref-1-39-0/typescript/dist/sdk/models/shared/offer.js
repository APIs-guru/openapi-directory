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
import { ExclusionRule } from "./exclusionrule";
export var OfferAvailabilityEnum;
(function (OfferAvailabilityEnum) {
    OfferAvailabilityEnum["Available"] = "Available";
    OfferAvailabilityEnum["ComingSoon"] = "ComingSoon";
})(OfferAvailabilityEnum || (OfferAvailabilityEnum = {}));
export var OfferDeliveryTypeEnum;
(function (OfferDeliveryTypeEnum) {
    OfferDeliveryTypeEnum["Stream"] = "Stream";
    OfferDeliveryTypeEnum["Download"] = "Download";
    OfferDeliveryTypeEnum["StreamOrDownload"] = "StreamOrDownload";
    OfferDeliveryTypeEnum["ProgressiveDownload"] = "ProgressiveDownload";
    OfferDeliveryTypeEnum["None"] = "None";
})(OfferDeliveryTypeEnum || (OfferDeliveryTypeEnum = {}));
export var OfferOwnershipEnum;
(function (OfferOwnershipEnum) {
    OfferOwnershipEnum["Subscription"] = "Subscription";
    OfferOwnershipEnum["Free"] = "Free";
    OfferOwnershipEnum["Rent"] = "Rent";
    OfferOwnershipEnum["Own"] = "Own";
    OfferOwnershipEnum["None"] = "None";
})(OfferOwnershipEnum || (OfferOwnershipEnum = {}));
export var OfferResolutionEnum;
(function (OfferResolutionEnum) {
    OfferResolutionEnum["Sd"] = "SD";
    OfferResolutionEnum["Hd720"] = "HD-720";
    OfferResolutionEnum["Hd1080"] = "HD-1080";
    OfferResolutionEnum["Hd4K"] = "HD-4K";
    OfferResolutionEnum["External"] = "External";
    OfferResolutionEnum["Unknown"] = "Unknown";
})(OfferResolutionEnum || (OfferResolutionEnum = {}));
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], Offer.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], Offer.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryType" }),
        __metadata("design:type", String)
    ], Offer.prototype, "deliveryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], Offer.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionRules", elemType: ExclusionRule }),
        __metadata("design:type", Array)
    ], Offer.prototype, "exclusionRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Offer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDownloads" }),
        __metadata("design:type", Number)
    ], Offer.prototype, "maxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPlays" }),
        __metadata("design:type", Number)
    ], Offer.prototype, "maxPlays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Offer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownership" }),
        __metadata("design:type", String)
    ], Offer.prototype, "ownership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playPeriod" }),
        __metadata("design:type", Number)
    ], Offer.prototype, "playPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], Offer.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rentalPeriod" }),
        __metadata("design:type", Number)
    ], Offer.prototype, "rentalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], Offer.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], Offer.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], Offer.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionCode" }),
        __metadata("design:type", String)
    ], Offer.prototype, "subscriptionCode", void 0);
    return Offer;
}(SpeakeasyBase));
export { Offer };
