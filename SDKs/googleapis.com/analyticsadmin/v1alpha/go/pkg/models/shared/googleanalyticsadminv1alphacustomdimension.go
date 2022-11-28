package shared

type GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum string

const (
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumDimensionScopeUnspecified GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "DIMENSION_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumEvent                     GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "EVENT"
	GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnumUser                      GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum = "USER"
)

// GoogleAnalyticsAdminV1alphaCustomDimension
// A definition for a CustomDimension.
type GoogleAnalyticsAdminV1alphaCustomDimension struct {
	Description                *string                                              `json:"description,omitempty"`
	DisallowAdsPersonalization *bool                                                `json:"disallowAdsPersonalization,omitempty"`
	DisplayName                *string                                              `json:"displayName,omitempty"`
	Name                       *string                                              `json:"name,omitempty"`
	ParameterName              *string                                              `json:"parameterName,omitempty"`
	Scope                      *GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum `json:"scope,omitempty"`
}

// GoogleAnalyticsAdminV1alphaCustomDimensionInput
// A definition for a CustomDimension.
type GoogleAnalyticsAdminV1alphaCustomDimensionInput struct {
	Description                *string                                              `json:"description,omitempty"`
	DisallowAdsPersonalization *bool                                                `json:"disallowAdsPersonalization,omitempty"`
	DisplayName                *string                                              `json:"displayName,omitempty"`
	ParameterName              *string                                              `json:"parameterName,omitempty"`
	Scope                      *GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum `json:"scope,omitempty"`
}
