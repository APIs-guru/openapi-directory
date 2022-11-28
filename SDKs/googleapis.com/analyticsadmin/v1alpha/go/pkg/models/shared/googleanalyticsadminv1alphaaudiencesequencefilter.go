package shared

type GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeUnspecified       GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameEvent   GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameSession GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeAcrossAllSessions GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
)

// GoogleAnalyticsAdminV1alphaAudienceSequenceFilter
// Defines filters that must occur in a specific order for the user to be a member of the Audience.
type GoogleAnalyticsAdminV1alphaAudienceSequenceFilter struct {
	Scope                   *GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum             `json:"scope,omitempty"`
	SequenceMaximumDuration *string                                                                 `json:"sequenceMaximumDuration,omitempty"`
	SequenceSteps           []GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep `json:"sequenceSteps,omitempty"`
}
