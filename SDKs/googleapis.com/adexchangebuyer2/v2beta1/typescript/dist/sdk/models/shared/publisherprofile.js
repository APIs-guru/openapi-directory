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
import { PublisherProfileMobileApplication } from "./publisherprofilemobileapplication";
import { Seller } from "./seller";
// PublisherProfile
/**
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
**/
var PublisherProfile = /** @class */ (function (_super) {
    __extends(PublisherProfile, _super);
    function PublisherProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceDescription" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "audienceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerPitchStatement" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "buyerPitchStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDealsContact" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "directDealsContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], PublisherProfile.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googlePlusUrl" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "googlePlusUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isParent" }),
        __metadata("design:type", Boolean)
    ], PublisherProfile.prototype, "isParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoUrl" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaKitUrl" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "mediaKitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApps", elemType: PublisherProfileMobileApplication }),
        __metadata("design:type", Array)
    ], PublisherProfile.prototype, "mobileApps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overview" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=programmaticDealsContact" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "programmaticDealsContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherProfileId" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "publisherProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateCardInfoUrl" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "rateCardInfoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplePageUrl" }),
        __metadata("design:type", String)
    ], PublisherProfile.prototype, "samplePageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seller" }),
        __metadata("design:type", Seller)
    ], PublisherProfile.prototype, "seller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topHeadlines" }),
        __metadata("design:type", Array)
    ], PublisherProfile.prototype, "topHeadlines", void 0);
    return PublisherProfile;
}(SpeakeasyBase));
export { PublisherProfile };
