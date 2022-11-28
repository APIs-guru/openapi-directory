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
import { PrivateData } from "./privatedata";
import { CreativeRestrictions } from "./creativerestrictions";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { TargetingCriteria } from "./targetingcriteria";
export var DealCreativePreApprovalPolicyEnum;
(function (DealCreativePreApprovalPolicyEnum) {
    DealCreativePreApprovalPolicyEnum["CreativePreApprovalPolicyUnspecified"] = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED";
    DealCreativePreApprovalPolicyEnum["SellerPreApprovalRequired"] = "SELLER_PRE_APPROVAL_REQUIRED";
    DealCreativePreApprovalPolicyEnum["SellerPreApprovalNotRequired"] = "SELLER_PRE_APPROVAL_NOT_REQUIRED";
})(DealCreativePreApprovalPolicyEnum || (DealCreativePreApprovalPolicyEnum = {}));
export var DealCreativeSafeFrameCompatibilityEnum;
(function (DealCreativeSafeFrameCompatibilityEnum) {
    DealCreativeSafeFrameCompatibilityEnum["CreativeSafeFrameCompatibilityUnspecified"] = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED";
    DealCreativeSafeFrameCompatibilityEnum["Compatible"] = "COMPATIBLE";
    DealCreativeSafeFrameCompatibilityEnum["Incompatible"] = "INCOMPATIBLE";
})(DealCreativeSafeFrameCompatibilityEnum || (DealCreativeSafeFrameCompatibilityEnum = {}));
export var DealProgrammaticCreativeSourceEnum;
(function (DealProgrammaticCreativeSourceEnum) {
    DealProgrammaticCreativeSourceEnum["ProgrammaticCreativeSourceUnspecified"] = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED";
    DealProgrammaticCreativeSourceEnum["Advertiser"] = "ADVERTISER";
    DealProgrammaticCreativeSourceEnum["Publisher"] = "PUBLISHER";
})(DealProgrammaticCreativeSourceEnum || (DealProgrammaticCreativeSourceEnum = {}));
export var DealSyndicationProductEnum;
(function (DealSyndicationProductEnum) {
    DealSyndicationProductEnum["SyndicationProductUnspecified"] = "SYNDICATION_PRODUCT_UNSPECIFIED";
    DealSyndicationProductEnum["Content"] = "CONTENT";
    DealSyndicationProductEnum["Mobile"] = "MOBILE";
    DealSyndicationProductEnum["Video"] = "VIDEO";
    DealSyndicationProductEnum["Games"] = "GAMES";
})(DealSyndicationProductEnum || (DealSyndicationProductEnum = {}));
// Deal
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
var Deal = /** @class */ (function (_super) {
    __extends(Deal, _super);
    function Deal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableEndTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "availableEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableStartTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "availableStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", PrivateData)
    ], Deal.prototype, "buyerPrivateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createProductId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createProductRevision" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createProductRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" }),
        __metadata("design:type", String)
    ], Deal.prototype, "creativePreApprovalPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeRestrictions" }),
        __metadata("design:type", CreativeRestrictions)
    ], Deal.prototype, "creativeRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" }),
        __metadata("design:type", String)
    ], Deal.prototype, "creativeSafeFrameCompatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "dealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealServingMetadata" }),
        __metadata("design:type", DealServingMetadata)
    ], Deal.prototype, "dealServingMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealTerms" }),
        __metadata("design:type", DealTerms)
    ], Deal.prototype, "dealTerms", void 0);
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
        SpeakeasyMetadata({ data: "json, name=externalDealId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "externalDealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], Deal.prototype, "isSetupComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" }),
        __metadata("design:type", String)
    ], Deal.prototype, "programmaticCreativeSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "proposalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], Deal.prototype, "sellerContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], Deal.prototype, "syndicationProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", MarketplaceTargeting)
    ], Deal.prototype, "targeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria }),
        __metadata("design:type", Array)
    ], Deal.prototype, "targetingCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], Deal.prototype, "webPropertyCode", void 0);
    return Deal;
}(SpeakeasyBase));
export { Deal };
// DealInput
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
var DealInput = /** @class */ (function (_super) {
    __extends(DealInput, _super);
    function DealInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableEndTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "availableEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableStartTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "availableStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", PrivateData)
    ], DealInput.prototype, "buyerPrivateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createProductId" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "createProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createProductRevision" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "createProductRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeRestrictions" }),
        __metadata("design:type", CreativeRestrictions)
    ], DealInput.prototype, "creativeRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealServingMetadata" }),
        __metadata("design:type", DealServingMetadata)
    ], DealInput.prototype, "dealServingMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealTerms" }),
        __metadata("design:type", DealTerms)
    ], DealInput.prototype, "dealTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "syndicationProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", MarketplaceTargeting)
    ], DealInput.prototype, "targeting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria }),
        __metadata("design:type", Array)
    ], DealInput.prototype, "targetingCriterion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "webPropertyCode", void 0);
    return DealInput;
}(SpeakeasyBase));
export { DealInput };
