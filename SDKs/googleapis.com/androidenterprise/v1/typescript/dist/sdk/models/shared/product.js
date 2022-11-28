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
import { AppRestrictionsSchema } from "./apprestrictionsschema";
import { TrackInfo } from "./trackinfo";
import { AppVersion } from "./appversion";
import { ProductPermission } from "./productpermission";
import { ProductSigningCertificate } from "./productsigningcertificate";
export var ProductAvailableTracksEnum;
(function (ProductAvailableTracksEnum) {
    ProductAvailableTracksEnum["AppTrackUnspecified"] = "appTrackUnspecified";
    ProductAvailableTracksEnum["Production"] = "production";
    ProductAvailableTracksEnum["Beta"] = "beta";
    ProductAvailableTracksEnum["Alpha"] = "alpha";
})(ProductAvailableTracksEnum || (ProductAvailableTracksEnum = {}));
export var ProductContentRatingEnum;
(function (ProductContentRatingEnum) {
    ProductContentRatingEnum["RatingUnknown"] = "ratingUnknown";
    ProductContentRatingEnum["All"] = "all";
    ProductContentRatingEnum["PreTeen"] = "preTeen";
    ProductContentRatingEnum["Teen"] = "teen";
    ProductContentRatingEnum["Mature"] = "mature";
})(ProductContentRatingEnum || (ProductContentRatingEnum = {}));
export var ProductDistributionChannelEnum;
(function (ProductDistributionChannelEnum) {
    ProductDistributionChannelEnum["PublicGoogleHosted"] = "publicGoogleHosted";
    ProductDistributionChannelEnum["PrivateGoogleHosted"] = "privateGoogleHosted";
    ProductDistributionChannelEnum["PrivateSelfHosted"] = "privateSelfHosted";
})(ProductDistributionChannelEnum || (ProductDistributionChannelEnum = {}));
export var ProductFeaturesEnum;
(function (ProductFeaturesEnum) {
    ProductFeaturesEnum["FeatureUnknown"] = "featureUnknown";
    ProductFeaturesEnum["VpnApp"] = "vpnApp";
})(ProductFeaturesEnum || (ProductFeaturesEnum = {}));
export var ProductProductPricingEnum;
(function (ProductProductPricingEnum) {
    ProductProductPricingEnum["Unknown"] = "unknown";
    ProductProductPricingEnum["Free"] = "free";
    ProductProductPricingEnum["FreeWithInAppPurchase"] = "freeWithInAppPurchase";
    ProductProductPricingEnum["Paid"] = "paid";
})(ProductProductPricingEnum || (ProductProductPricingEnum = {}));
// Product
/**
 * A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.
**/
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appRestrictionsSchema" }),
        __metadata("design:type", AppRestrictionsSchema)
    ], Product.prototype, "appRestrictionsSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appTracks", elemType: TrackInfo }),
        __metadata("design:type", Array)
    ], Product.prototype, "appTracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appVersion", elemType: AppVersion }),
        __metadata("design:type", Array)
    ], Product.prototype, "appVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorName" }),
        __metadata("design:type", String)
    ], Product.prototype, "authorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableCountries" }),
        __metadata("design:type", Array)
    ], Product.prototype, "availableCountries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTracks" }),
        __metadata("design:type", Array)
    ], Product.prototype, "availableTracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Product.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRating" }),
        __metadata("design:type", String)
    ], Product.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailsUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "detailsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributionChannel" }),
        __metadata("design:type", String)
    ], Product.prototype, "distributionChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], Product.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestampMillis" }),
        __metadata("design:type", String)
    ], Product.prototype, "lastUpdatedTimestampMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minAndroidSdkVersion" }),
        __metadata("design:type", Number)
    ], Product.prototype, "minAndroidSdkVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions", elemType: ProductPermission }),
        __metadata("design:type", Array)
    ], Product.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], Product.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPricing" }),
        __metadata("design:type", String)
    ], Product.prototype, "productPricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recentChanges" }),
        __metadata("design:type", String)
    ], Product.prototype, "recentChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresContainerApp" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "requiresContainerApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenshotUrls" }),
        __metadata("design:type", Array)
    ], Product.prototype, "screenshotUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingCertificate" }),
        __metadata("design:type", ProductSigningCertificate)
    ], Product.prototype, "signingCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallIconUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "smallIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Product.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workDetailsUrl" }),
        __metadata("design:type", String)
    ], Product.prototype, "workDetailsUrl", void 0);
    return Product;
}(SpeakeasyBase));
export { Product };
