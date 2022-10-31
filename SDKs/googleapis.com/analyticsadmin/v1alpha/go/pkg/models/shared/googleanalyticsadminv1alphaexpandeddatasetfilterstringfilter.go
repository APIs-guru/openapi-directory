package shared




type GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum string

const (
    GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnumMatchTypeUnspecified GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum = "MATCH_TYPE_UNSPECIFIED"
GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnumExact GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum = "EXACT"
GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnumContains GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum = "CONTAINS"
)


type GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter struct {
    CaseSensitive *bool `json:"caseSensitive,omitempty"`
    MatchType *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum `json:"matchType,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

