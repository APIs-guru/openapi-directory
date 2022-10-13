package shared

type GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumAudienceExclusionDurationModeUnspecified GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumExcludeTemporarily                       GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "EXCLUDE_TEMPORARILY"
	GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnumExcludePermanently                       GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum = "EXCLUDE_PERMANENTLY"
)

type GoogleAnalyticsAdminV1alphaAudience struct {
	AdsPersonalizationEnabled *bool                                                         `json:"adsPersonalizationEnabled"`
	Description               *string                                                       `json:"description"`
	DisplayName               *string                                                       `json:"displayName"`
	EventTrigger              *GoogleAnalyticsAdminV1alphaAudienceEventTrigger              `json:"eventTrigger"`
	ExclusionDurationMode     *GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum `json:"exclusionDurationMode"`
	FilterClauses             []GoogleAnalyticsAdminV1alphaAudienceFilterClause             `json:"filterClauses"`
	MembershipDurationDays    *int32                                                        `json:"membershipDurationDays"`
	Name                      *string                                                       `json:"name"`
}
