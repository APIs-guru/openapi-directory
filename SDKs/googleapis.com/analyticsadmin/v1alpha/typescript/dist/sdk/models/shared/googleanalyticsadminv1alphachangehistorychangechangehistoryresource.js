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
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";
import { GoogleAnalyticsAdminV1alphaAttributionSettings } from "./googleanalyticsadminv1alphaattributionsettings";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";
import { GoogleAnalyticsAdminV1alphaDataRetentionSettings } from "./googleanalyticsadminv1alphadataretentionsettings";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";
import { GoogleAnalyticsAdminV1alphaExpandedDataSet } from "./googleanalyticsadminv1alphaexpandeddataset";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";
import { GoogleAnalyticsAdminV1alphaGoogleSignalsSettings } from "./googleanalyticsadminv1alphagooglesignalssettings";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";
// GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource
/**
 * A snapshot of a resource as before or after the result of a change in change history.
**/
var GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource, _super);
    function GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccount)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionSettings" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAttributionSettings)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "attributionSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionEvent" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaConversionEvent)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "conversionEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDimension" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaCustomDimension)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMetric" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaCustomMetric)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "customMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetentionSettings" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataRetentionSettings)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "dataRetentionSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataStream" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDataStream)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "dataStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLink" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "displayVideo360AdvertiserLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLinkProposal" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "displayVideo360AdvertiserLinkProposal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandedDataSet" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaExpandedDataSet)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "expandedDataSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firebaseLink" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaFirebaseLink)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "firebaseLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleAdsLink" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaGoogleAdsLink)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "googleAdsLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleSignalsSettings" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaGoogleSignalsSettings)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "googleSignalsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementProtocolSecret" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "measurementProtocolSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaProperty)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchAds360Link" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaSearchAds360Link)
    ], GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.prototype, "searchAds360Link", void 0);
    return GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource };
