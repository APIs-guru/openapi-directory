import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RegionalTaxRateInfoTaxTierEnum {
    TaxTierUnspecified = "TAX_TIER_UNSPECIFIED"
,    TaxTierBooks1 = "TAX_TIER_BOOKS_1"
,    TaxTierNews1 = "TAX_TIER_NEWS_1"
,    TaxTierNews2 = "TAX_TIER_NEWS_2"
,    TaxTierMusicOrAudio1 = "TAX_TIER_MUSIC_OR_AUDIO_1"
,    TaxTierLiveOrBroadcast1 = "TAX_TIER_LIVE_OR_BROADCAST_1"
}


// RegionalTaxRateInfo
/** 
 * Specified details about taxation in a given geographical region.
**/
export class RegionalTaxRateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=eligibleForStreamingServiceTaxRate" })
  eligibleForStreamingServiceTaxRate?: boolean;

  @Metadata({ data: "json, name=taxTier" })
  taxTier?: RegionalTaxRateInfoTaxTierEnum;
}
