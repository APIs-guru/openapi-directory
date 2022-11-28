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
import { OfferTag } from "./offertag";
import { OtherRegionsSubscriptionOfferConfig } from "./otherregionssubscriptionofferconfig";
import { SubscriptionOfferPhase } from "./subscriptionofferphase";
import { RegionalSubscriptionOfferConfig } from "./regionalsubscriptionofferconfig";
import { SubscriptionOfferTargeting } from "./subscriptionoffertargeting";
export var SubscriptionOfferStateEnum;
(function (SubscriptionOfferStateEnum) {
    SubscriptionOfferStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    SubscriptionOfferStateEnum["Draft"] = "DRAFT";
    SubscriptionOfferStateEnum["Active"] = "ACTIVE";
    SubscriptionOfferStateEnum["Inactive"] = "INACTIVE";
})(SubscriptionOfferStateEnum || (SubscriptionOfferStateEnum = {}));
// SubscriptionOfferInput
/**
 * A single, temporary offer
**/
var SubscriptionOfferInput = /** @class */ (function (_super) {
    __extends(SubscriptionOfferInput, _super);
    function SubscriptionOfferInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basePlanId" }),
        __metadata("design:type", String)
    ], SubscriptionOfferInput.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], SubscriptionOfferInput.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag }),
        __metadata("design:type", Array)
    ], SubscriptionOfferInput.prototype, "offerTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" }),
        __metadata("design:type", OtherRegionsSubscriptionOfferConfig)
    ], SubscriptionOfferInput.prototype, "otherRegionsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], SubscriptionOfferInput.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phases", elemType: SubscriptionOfferPhase }),
        __metadata("design:type", Array)
    ], SubscriptionOfferInput.prototype, "phases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SubscriptionOfferInput.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalSubscriptionOfferConfig }),
        __metadata("design:type", Array)
    ], SubscriptionOfferInput.prototype, "regionalConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", SubscriptionOfferTargeting)
    ], SubscriptionOfferInput.prototype, "targeting", void 0);
    return SubscriptionOfferInput;
}(SpeakeasyBase));
export { SubscriptionOfferInput };
// SubscriptionOffer
/**
 * A single, temporary offer
**/
var SubscriptionOffer = /** @class */ (function (_super) {
    __extends(SubscriptionOffer, _super);
    function SubscriptionOffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basePlanId" }),
        __metadata("design:type", String)
    ], SubscriptionOffer.prototype, "basePlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], SubscriptionOffer.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerTags", elemType: OfferTag }),
        __metadata("design:type", Array)
    ], SubscriptionOffer.prototype, "offerTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherRegionsConfig" }),
        __metadata("design:type", OtherRegionsSubscriptionOfferConfig)
    ], SubscriptionOffer.prototype, "otherRegionsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], SubscriptionOffer.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phases", elemType: SubscriptionOfferPhase }),
        __metadata("design:type", Array)
    ], SubscriptionOffer.prototype, "phases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], SubscriptionOffer.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalConfigs", elemType: RegionalSubscriptionOfferConfig }),
        __metadata("design:type", Array)
    ], SubscriptionOffer.prototype, "regionalConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SubscriptionOffer.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targeting" }),
        __metadata("design:type", SubscriptionOfferTargeting)
    ], SubscriptionOffer.prototype, "targeting", void 0);
    return SubscriptionOffer;
}(SpeakeasyBase));
export { SubscriptionOffer };
