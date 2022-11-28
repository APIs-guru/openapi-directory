package shared

type RegionalTaxRateInfoStreamingTaxTypeEnum string

const (
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeUnspecified            RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_UNSPECIFIED"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoRental       RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoSales        RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoMultiChannel RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioRental       RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioSales        RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES"
	RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioMultiChannel RegionalTaxRateInfoStreamingTaxTypeEnum = "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"
)

type RegionalTaxRateInfoTaxTierEnum string

const (
	RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified      RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_UNSPECIFIED"
	RegionalTaxRateInfoTaxTierEnumTaxTierBooks1           RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_BOOKS_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierNews1            RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_NEWS_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierNews2            RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_NEWS_2"
	RegionalTaxRateInfoTaxTierEnumTaxTierMusicOrAudio1    RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_MUSIC_OR_AUDIO_1"
	RegionalTaxRateInfoTaxTierEnumTaxTierLiveOrBroadcast1 RegionalTaxRateInfoTaxTierEnum = "TAX_TIER_LIVE_OR_BROADCAST_1"
)

// RegionalTaxRateInfo
// Specified details about taxation in a given geographical region.
type RegionalTaxRateInfo struct {
	EligibleForStreamingServiceTaxRate *bool                                    `json:"eligibleForStreamingServiceTaxRate,omitempty"`
	StreamingTaxType                   *RegionalTaxRateInfoStreamingTaxTypeEnum `json:"streamingTaxType,omitempty"`
	TaxTier                            *RegionalTaxRateInfoTaxTierEnum          `json:"taxTier,omitempty"`
}
