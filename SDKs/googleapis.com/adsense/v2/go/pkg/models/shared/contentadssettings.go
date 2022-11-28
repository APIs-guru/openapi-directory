package shared

type ContentAdsSettingsTypeEnum string

const (
	ContentAdsSettingsTypeEnumTypeUnspecified ContentAdsSettingsTypeEnum = "TYPE_UNSPECIFIED"
	ContentAdsSettingsTypeEnumDisplay         ContentAdsSettingsTypeEnum = "DISPLAY"
	ContentAdsSettingsTypeEnumFeed            ContentAdsSettingsTypeEnum = "FEED"
	ContentAdsSettingsTypeEnumArticle         ContentAdsSettingsTypeEnum = "ARTICLE"
	ContentAdsSettingsTypeEnumMatchedContent  ContentAdsSettingsTypeEnum = "MATCHED_CONTENT"
	ContentAdsSettingsTypeEnumLink            ContentAdsSettingsTypeEnum = "LINK"
)

// ContentAdsSettings
// Settings specific to content ads (AFC).
type ContentAdsSettings struct {
	Size *string                     `json:"size,omitempty"`
	Type *ContentAdsSettingsTypeEnum `json:"type,omitempty"`
}
