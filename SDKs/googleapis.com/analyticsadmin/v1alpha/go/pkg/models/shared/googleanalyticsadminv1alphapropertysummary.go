package shared




type GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum string

const (
    GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnumPropertyTypeUnspecified GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_UNSPECIFIED"
GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnumPropertyTypeOrdinary GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_ORDINARY"
GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnumPropertyTypeSubproperty GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_SUBPROPERTY"
GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnumPropertyTypeRollup GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_ROLLUP"
)


type GoogleAnalyticsAdminV1alphaPropertySummary struct {
    DisplayName *string `json:"displayName,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Property *string `json:"property,omitempty"`
    PropertyType *GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum `json:"propertyType,omitempty"`
    
}

