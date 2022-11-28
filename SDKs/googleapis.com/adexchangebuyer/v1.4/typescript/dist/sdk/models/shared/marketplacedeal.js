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
import { DealServingMetadata } from "./dealservingmetadata";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { SharedTargeting } from "./sharedtargeting";
import { DealTerms } from "./dealterms";
// MarketplaceDeal
/**
 * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
var MarketplaceDeal = /** @class */ (function (_super) {
    __extends(MarketplaceDeal, _super);
    function MarketplaceDeal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", PrivateData)
    ], MarketplaceDeal.prototype, "buyerPrivateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTimeMs" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "creationTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "creativePreApprovalPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "creativeSafeFrameCompatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "dealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealServingMetadata" }),
        __metadata("design:type", DealServingMetadata)
    ], MarketplaceDeal.prototype, "dealServingMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryControl" }),
        __metadata("design:type", DeliveryControl)
    ], MarketplaceDeal.prototype, "deliveryControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDealId" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "externalDealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightEndTimeMs" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "flightEndTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightStartTimeMs" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "flightStartTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryDescription" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "inventoryDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRfpTemplate" }),
        __metadata("design:type", Boolean)
    ], MarketplaceDeal.prototype, "isRfpTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], MarketplaceDeal.prototype, "isSetupComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTimeMs" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "lastUpdateTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=makegoodRequestedReason" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "makegoodRequestedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productRevisionNumber" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "productRevisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "programmaticCreativeSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proposalId" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "proposalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation }),
        __metadata("design:type", Array)
    ], MarketplaceDeal.prototype, "sellerContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedTargetings", elemType: SharedTargeting }),
        __metadata("design:type", Array)
    ], MarketplaceDeal.prototype, "sharedTargetings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "syndicationProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", DealTerms)
    ], MarketplaceDeal.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], MarketplaceDeal.prototype, "webPropertyCode", void 0);
    return MarketplaceDeal;
}(SpeakeasyBase));
export { MarketplaceDeal };
