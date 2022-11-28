import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RegionalTaxRateInfoStreamingTaxTypeEnum {
    StreamingTaxTypeUnspecified = "STREAMING_TAX_TYPE_UNSPECIFIED",
    StreamingTaxTypeTelcoVideoRental = "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL",
    StreamingTaxTypeTelcoVideoSales = "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES",
    StreamingTaxTypeTelcoVideoMultiChannel = "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL",
    StreamingTaxTypeTelcoAudioRental = "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL",
    StreamingTaxTypeTelcoAudioSales = "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES",
    StreamingTaxTypeTelcoAudioMultiChannel = "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"
}

export enum RegionalTaxRateInfoTaxTierEnum {
    TaxTierUnspecified = "TAX_TIER_UNSPECIFIED",
    TaxTierBooks1 = "TAX_TIER_BOOKS_1",
    TaxTierNews1 = "TAX_TIER_NEWS_1",
    TaxTierNews2 = "TAX_TIER_NEWS_2",
    TaxTierMusicOrAudio1 = "TAX_TIER_MUSIC_OR_AUDIO_1",
    TaxTierLiveOrBroadcast1 = "TAX_TIER_LIVE_OR_BROADCAST_1"
}


// RegionalTaxRateInfo
/** 
 * Specified details about taxation in a given geographical region.
**/
export class RegionalTaxRateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligibleForStreamingServiceTaxRate" })
  eligibleForStreamingServiceTaxRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=streamingTaxType" })
  streamingTaxType?: RegionalTaxRateInfoStreamingTaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=taxTier" })
  taxTier?: RegionalTaxRateInfoTaxTierEnum;
}
