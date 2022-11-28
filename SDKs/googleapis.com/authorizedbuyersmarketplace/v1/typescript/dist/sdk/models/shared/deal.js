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
import { Money } from "./money";
import { PreferredDealTerms } from "./preferreddealterms";
import { PrivateAuctionTermsInput } from "./privateauctionterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
import { TimeZone } from "./timezone";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { CreativeRequirements } from "./creativerequirements";
import { DeliveryControl } from "./deliverycontrol";
import { PrivateAuctionTerms } from "./privateauctionterms";
export var DealDealTypeEnum;
(function (DealDealTypeEnum) {
    DealDealTypeEnum["DealTypeUnspecified"] = "DEAL_TYPE_UNSPECIFIED";
    DealDealTypeEnum["PreferredDeal"] = "PREFERRED_DEAL";
    DealDealTypeEnum["PrivateAuction"] = "PRIVATE_AUCTION";
    DealDealTypeEnum["ProgrammaticGuaranteed"] = "PROGRAMMATIC_GUARANTEED";
})(DealDealTypeEnum || (DealDealTypeEnum = {}));
// DealInput
/**
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
var DealInput = /** @class */ (function (_super) {
    __extends(DealInput, _super);
    function DealInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" }),
        __metadata("design:type", Money)
    ], DealInput.prototype, "estimatedGrossSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightEndTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "flightEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightStartTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "flightStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredDealTerms" }),
        __metadata("design:type", PreferredDealTerms)
    ], DealInput.prototype, "preferredDealTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateAuctionTerms" }),
        __metadata("design:type", PrivateAuctionTermsInput)
    ], DealInput.prototype, "privateAuctionTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticGuaranteedTerms" }),
        __metadata("design:type", ProgrammaticGuaranteedTerms)
    ], DealInput.prototype, "programmaticGuaranteedTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProfile" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "publisherProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerTimeZone" }),
        __metadata("design:type", TimeZone)
    ], DealInput.prototype, "sellerTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", MarketplaceTargeting)
    ], DealInput.prototype, "targeting", void 0);
    return DealInput;
}(SpeakeasyBase));
export { DealInput };
// Deal
/**
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
var Deal = /** @class */ (function (_super) {
    __extends(Deal, _super);
    function Deal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billedBuyer" }),
        __metadata("design:type", String)
    ], Deal.prototype, "billedBuyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", String)
    ], Deal.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], Deal.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeRequirements" }),
        __metadata("design:type", CreativeRequirements)
    ], Deal.prototype, "creativeRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealType" }),
        __metadata("design:type", String)
    ], Deal.prototype, "dealType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryControl" }),
        __metadata("design:type", DeliveryControl)
    ], Deal.prototype, "deliveryControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Deal.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Deal.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" }),
        __metadata("design:type", Money)
    ], Deal.prototype, "estimatedGrossSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightEndTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "flightEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightStartTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "flightStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Deal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredDealTerms" }),
        __metadata("design:type", PreferredDealTerms)
    ], Deal.prototype, "preferredDealTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateAuctionTerms" }),
        __metadata("design:type", PrivateAuctionTerms)
    ], Deal.prototype, "privateAuctionTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticGuaranteedTerms" }),
        __metadata("design:type", ProgrammaticGuaranteedTerms)
    ], Deal.prototype, "programmaticGuaranteedTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalRevision" }),
        __metadata("design:type", String)
    ], Deal.prototype, "proposalRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProfile" }),
        __metadata("design:type", String)
    ], Deal.prototype, "publisherProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerTimeZone" }),
        __metadata("design:type", TimeZone)
    ], Deal.prototype, "sellerTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", MarketplaceTargeting)
    ], Deal.prototype, "targeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "updateTime", void 0);
    return Deal;
}(SpeakeasyBase));
export { Deal };
