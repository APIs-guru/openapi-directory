package shared




type ContentAdsSettingsTypeEnum string

const (
    ContentAdsSettingsTypeEnumTypeUnspecified ContentAdsSettingsTypeEnum = "TYPE_UNSPECIFIED"
ContentAdsSettingsTypeEnumDisplay ContentAdsSettingsTypeEnum = "DISPLAY"
ContentAdsSettingsTypeEnumFeed ContentAdsSettingsTypeEnum = "FEED"
ContentAdsSettingsTypeEnumArticle ContentAdsSettingsTypeEnum = "ARTICLE"
ContentAdsSettingsTypeEnumMatchedContent ContentAdsSettingsTypeEnum = "MATCHED_CONTENT"
ContentAdsSettingsTypeEnumLink ContentAdsSettingsTypeEnum = "LINK"
)


type ContentAdsSettings struct {
    Size *string `json:"size,omitempty"`
    Type *ContentAdsSettingsTypeEnum `json:"type,omitempty"`
    
}

