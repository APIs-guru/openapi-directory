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
// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
/**
 * A link between a GA4 property and a Display & Video 360 advertiser.
**/
var GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink, _super);
    function GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserDisplayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "advertiserDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "campaignDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "costDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.prototype, "name", void 0);
    return GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink };
// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput
/**
 * A link between a GA4 property and a Display & Video 360 advertiser.
**/
var GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput, _super);
    function GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput.prototype, "adsPersonalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput.prototype, "campaignDataSharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput.prototype, "costDataSharingEnabled", void 0);
    return GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput };
