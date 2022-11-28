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
export var RegionalTaxRateInfoStreamingTaxTypeEnum;
(function (RegionalTaxRateInfoStreamingTaxTypeEnum) {
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeUnspecified"] = "STREAMING_TAX_TYPE_UNSPECIFIED";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoVideoRental"] = "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoVideoSales"] = "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoVideoMultiChannel"] = "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoAudioRental"] = "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoAudioSales"] = "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES";
    RegionalTaxRateInfoStreamingTaxTypeEnum["StreamingTaxTypeTelcoAudioMultiChannel"] = "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL";
})(RegionalTaxRateInfoStreamingTaxTypeEnum || (RegionalTaxRateInfoStreamingTaxTypeEnum = {}));
export var RegionalTaxRateInfoTaxTierEnum;
(function (RegionalTaxRateInfoTaxTierEnum) {
    RegionalTaxRateInfoTaxTierEnum["TaxTierUnspecified"] = "TAX_TIER_UNSPECIFIED";
    RegionalTaxRateInfoTaxTierEnum["TaxTierBooks1"] = "TAX_TIER_BOOKS_1";
    RegionalTaxRateInfoTaxTierEnum["TaxTierNews1"] = "TAX_TIER_NEWS_1";
    RegionalTaxRateInfoTaxTierEnum["TaxTierNews2"] = "TAX_TIER_NEWS_2";
    RegionalTaxRateInfoTaxTierEnum["TaxTierMusicOrAudio1"] = "TAX_TIER_MUSIC_OR_AUDIO_1";
    RegionalTaxRateInfoTaxTierEnum["TaxTierLiveOrBroadcast1"] = "TAX_TIER_LIVE_OR_BROADCAST_1";
})(RegionalTaxRateInfoTaxTierEnum || (RegionalTaxRateInfoTaxTierEnum = {}));
// RegionalTaxRateInfo
/**
 * Specified details about taxation in a given geographical region.
**/
var RegionalTaxRateInfo = /** @class */ (function (_super) {
    __extends(RegionalTaxRateInfo, _super);
    function RegionalTaxRateInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleForStreamingServiceTaxRate" }),
        __metadata("design:type", Boolean)
    ], RegionalTaxRateInfo.prototype, "eligibleForStreamingServiceTaxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingTaxType" }),
        __metadata("design:type", String)
    ], RegionalTaxRateInfo.prototype, "streamingTaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxTier" }),
        __metadata("design:type", String)
    ], RegionalTaxRateInfo.prototype, "taxTier", void 0);
    return RegionalTaxRateInfo;
}(SpeakeasyBase));
export { RegionalTaxRateInfo };
