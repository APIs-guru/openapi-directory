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
import { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails } from "./googleanalyticsadminv1alphalinkproposalstatusdetails";
// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
var GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput, _super);
    function GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput.prototype, "campaignDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput.prototype, "costDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationEmail" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput.prototype, "validationEmail", void 0);
    return GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput };
// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
/**
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
var GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal, _super);
    function GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserDisplayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "advertiserDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "campaignDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "costDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkProposalStatusDetails" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "linkProposalStatusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationEmail" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.prototype, "validationEmail", void 0);
    return GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal };
