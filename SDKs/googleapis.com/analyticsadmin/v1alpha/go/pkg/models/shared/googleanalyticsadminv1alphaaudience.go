package shared

type GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumAudienceExclusionDurationModeUnspecified GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumExcludeTemporarily                       GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "EXCLUDE_TEMPORARILY"
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumExcludePermanently                       GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "EXCLUDE_PERMANENTLY"
)

type GoogleAnalyticsAdminV1alphaAudience struct {
	AdsPersonalizationEnabled *bool                                                         `json:"adsPersonalizationEnabled,omitempty"`
	Description               *string                                                       `json:"description,omitempty"`
	DisplayName               *string                                                       `json:"displayName,omitempty"`
	EventTrigger              *GoogleAnalyticsAdminV1alphaAudienceEventTrigger              `json:"eventTrigger,omitempty"`
	ExclusionDurationMode     *GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum `json:"exclusionDurationMode,omitempty"`
	FilterClauses             []GoogleAnalyticsAdminV1alphaAudienceFilterClause             `json:"filterClauses,omitempty"`
	MembershipDurationDays    *int32                                                        `json:"membershipDurationDays,omitempty"`
	Name                      *string                                                       `json:"name,omitempty"`
}
