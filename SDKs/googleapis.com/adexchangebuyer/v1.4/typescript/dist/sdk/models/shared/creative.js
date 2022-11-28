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
var CreativeAdTechnologyProviders = /** @class */ (function (_super) {
    __extends(CreativeAdTechnologyProviders, _super);
    function CreativeAdTechnologyProviders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedProviderIds" }),
        __metadata("design:type", Array)
    ], CreativeAdTechnologyProviders.prototype, "detectedProviderIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasUnidentifiedProvider" }),
        __metadata("design:type", Boolean)
    ], CreativeAdTechnologyProviders.prototype, "hasUnidentifiedProvider", void 0);
    return CreativeAdTechnologyProviders;
}(SpeakeasyBase));
export { CreativeAdTechnologyProviders };
var CreativeCorrectionsContexts = /** @class */ (function (_super) {
    __extends(CreativeCorrectionsContexts, _super);
    function CreativeCorrectionsContexts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auctionType" }),
        __metadata("design:type", Array)
    ], CreativeCorrectionsContexts.prototype, "auctionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextType" }),
        __metadata("design:type", String)
    ], CreativeCorrectionsContexts.prototype, "contextType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoCriteriaId" }),
        __metadata("design:type", Array)
    ], CreativeCorrectionsContexts.prototype, "geoCriteriaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", Array)
    ], CreativeCorrectionsContexts.prototype, "platform", void 0);
    return CreativeCorrectionsContexts;
}(SpeakeasyBase));
export { CreativeCorrectionsContexts };
var CreativeCorrections = /** @class */ (function (_super) {
    __extends(CreativeCorrections, _super);
    function CreativeCorrections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts", elemType: CreativeCorrectionsContexts }),
        __metadata("design:type", Array)
    ], CreativeCorrections.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], CreativeCorrections.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreativeCorrections.prototype, "reason", void 0);
    return CreativeCorrections;
}(SpeakeasyBase));
export { CreativeCorrections };
var CreativeFilteringReasonsReasons = /** @class */ (function (_super) {
    __extends(CreativeFilteringReasonsReasons, _super);
    function CreativeFilteringReasonsReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringCount" }),
        __metadata("design:type", String)
    ], CreativeFilteringReasonsReasons.prototype, "filteringCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringStatus" }),
        __metadata("design:type", Number)
    ], CreativeFilteringReasonsReasons.prototype, "filteringStatus", void 0);
    return CreativeFilteringReasonsReasons;
}(SpeakeasyBase));
export { CreativeFilteringReasonsReasons };
// CreativeFilteringReasons
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
var CreativeFilteringReasons = /** @class */ (function (_super) {
    __extends(CreativeFilteringReasons, _super);
    function CreativeFilteringReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], CreativeFilteringReasons.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasons", elemType: CreativeFilteringReasonsReasons }),
        __metadata("design:type", Array)
    ], CreativeFilteringReasons.prototype, "reasons", void 0);
    return CreativeFilteringReasons;
}(SpeakeasyBase));
export { CreativeFilteringReasons };
// CreativeNativeAdAppIcon
/**
 * The app icon, for app download ads.
**/
var CreativeNativeAdAppIcon = /** @class */ (function (_super) {
    __extends(CreativeNativeAdAppIcon, _super);
    function CreativeNativeAdAppIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdAppIcon.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreativeNativeAdAppIcon.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdAppIcon.prototype, "width", void 0);
    return CreativeNativeAdAppIcon;
}(SpeakeasyBase));
export { CreativeNativeAdAppIcon };
// CreativeNativeAdImage
/**
 * A large image.
**/
var CreativeNativeAdImage = /** @class */ (function (_super) {
    __extends(CreativeNativeAdImage, _super);
    function CreativeNativeAdImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdImage.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreativeNativeAdImage.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdImage.prototype, "width", void 0);
    return CreativeNativeAdImage;
}(SpeakeasyBase));
export { CreativeNativeAdImage };
// CreativeNativeAdLogo
/**
 * A smaller image, for the advertiser logo.
**/
var CreativeNativeAdLogo = /** @class */ (function (_super) {
    __extends(CreativeNativeAdLogo, _super);
    function CreativeNativeAdLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdLogo.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreativeNativeAdLogo.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], CreativeNativeAdLogo.prototype, "width", void 0);
    return CreativeNativeAdLogo;
}(SpeakeasyBase));
export { CreativeNativeAdLogo };
// CreativeNativeAd
/**
 * If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
**/
var CreativeNativeAd = /** @class */ (function (_super) {
    __extends(CreativeNativeAd, _super);
    function CreativeNativeAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiser" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "advertiser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appIcon" }),
        __metadata("design:type", CreativeNativeAdAppIcon)
    ], CreativeNativeAd.prototype, "appIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callToAction" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "callToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickLinkUrl" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "clickLinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "clickTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headline" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", CreativeNativeAdImage)
    ], CreativeNativeAd.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" }),
        __metadata("design:type", Array)
    ], CreativeNativeAd.prototype, "impressionTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", CreativeNativeAdLogo)
    ], CreativeNativeAd.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starRating" }),
        __metadata("design:type", Number)
    ], CreativeNativeAd.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoURL" }),
        __metadata("design:type", String)
    ], CreativeNativeAd.prototype, "videoUrl", void 0);
    return CreativeNativeAd;
}(SpeakeasyBase));
export { CreativeNativeAd };
var CreativeServingRestrictionsContexts = /** @class */ (function (_super) {
    __extends(CreativeServingRestrictionsContexts, _super);
    function CreativeServingRestrictionsContexts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auctionType" }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictionsContexts.prototype, "auctionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextType" }),
        __metadata("design:type", String)
    ], CreativeServingRestrictionsContexts.prototype, "contextType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoCriteriaId" }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictionsContexts.prototype, "geoCriteriaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictionsContexts.prototype, "platform", void 0);
    return CreativeServingRestrictionsContexts;
}(SpeakeasyBase));
export { CreativeServingRestrictionsContexts };
var CreativeServingRestrictionsDisapprovalReasons = /** @class */ (function (_super) {
    __extends(CreativeServingRestrictionsDisapprovalReasons, _super);
    function CreativeServingRestrictionsDisapprovalReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictionsDisapprovalReasons.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreativeServingRestrictionsDisapprovalReasons.prototype, "reason", void 0);
    return CreativeServingRestrictionsDisapprovalReasons;
}(SpeakeasyBase));
export { CreativeServingRestrictionsDisapprovalReasons };
var CreativeServingRestrictions = /** @class */ (function (_super) {
    __extends(CreativeServingRestrictions, _super);
    function CreativeServingRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts", elemType: CreativeServingRestrictionsContexts }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictions.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disapprovalReasons", elemType: CreativeServingRestrictionsDisapprovalReasons }),
        __metadata("design:type", Array)
    ], CreativeServingRestrictions.prototype, "disapprovalReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreativeServingRestrictions.prototype, "reason", void 0);
    return CreativeServingRestrictions;
}(SpeakeasyBase));
export { CreativeServingRestrictions };
// Creative
/**
 * A creative and its classification data.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTMLSnippet" }),
        __metadata("design:type", String)
    ], Creative.prototype, "htmlSnippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adChoicesDestinationUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "adChoicesDestinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adTechnologyProviders" }),
        __metadata("design:type", CreativeAdTechnologyProviders)
    ], Creative.prototype, "adTechnologyProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiUploadTimestamp" }),
        __metadata("design:type", Date)
    ], Creative.prototype, "apiUploadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerCreativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "buyerCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrl" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "clickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corrections", elemType: CreativeCorrections }),
        __metadata("design:type", Array)
    ], Creative.prototype, "corrections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeStatusIdentityType" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeStatusIdentityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealsStatus" }),
        __metadata("design:type", String)
    ], Creative.prototype, "dealsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedDomains" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "detectedDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringReasons" }),
        __metadata("design:type", CreativeFilteringReasons)
    ], Creative.prototype, "filteringReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "impressionTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Creative.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nativeAd" }),
        __metadata("design:type", CreativeNativeAd)
    ], Creative.prototype, "nativeAd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openAuctionStatus" }),
        __metadata("design:type", String)
    ], Creative.prototype, "openAuctionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "productCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "restrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "sensitiveCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingRestrictions", elemType: CreativeServingRestrictions }),
        __metadata("design:type", Array)
    ], Creative.prototype, "servingRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorType" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "vendorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoURL" }),
        __metadata("design:type", String)
    ], Creative.prototype, "videoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoVastXML" }),
        __metadata("design:type", String)
    ], Creative.prototype, "videoVastXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "width", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
