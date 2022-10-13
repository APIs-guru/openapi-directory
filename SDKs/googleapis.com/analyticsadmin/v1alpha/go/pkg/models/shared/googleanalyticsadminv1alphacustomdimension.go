package shared

type GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum string

const (
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumDimensionScopeUnspecified GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "DIMENSION_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumEvent                     GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "EVENT"
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumUser                      GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "USER"
)

type GoogleAnalyticsAdminV1alphaCustomDimension struct {
	Description                *string                                              `json:"description"`
	DisallowAdsPersonalization *bool                                                `json:"disallowAdsPersonalization"`
	DisplayName                *string                                              `json:"displayName"`
	Name                       *string                                              `json:"name"`
	ParameterName              *string                                              `json:"parameterName"`
	Scope                      *GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum `json:"scope"`
}
