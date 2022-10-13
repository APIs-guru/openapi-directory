package shared

type RegionalTaxRateInfoTaxTierEnum string

const (
	RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified      RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_UNSPECIFIED"
	RegionalTaxRateInfoTaxTierEnumTaxTierBooks1           RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_BOOKS_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierNews1            RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_NEWS_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierNews2            RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_NEWS_2"
	RegionalTaxRateInfoTaxTierEnumTaxTierMusicOrAudio1    RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_MUSIC_OR_AUDIO_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierLiveOrBroadcast1 RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_LIVE_OR_BROADCAST_1"
)

type RegionalTaxRateInfo struct {
	EligibleForStreamingServiceTaxRate *bool                           `json:"eligibleForStreamingServiceTaxRate"`
	TaxTier                            *RegionalTaxRateInfoTaxTierEnum `json:"taxTier"`
}
