package shared

type GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeUnspecified       GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameEvent   GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeWithinSameSession GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
	GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnumAudienceFilterScopeAcrossAllSessions GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"
)

type GoogleAnalyticsAdminV1alphaAudienceSequenceFilter struct {
	Scope                   *GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum             `json:"scope"`
	SequenceMaximumDuration *string                                                                 `json:"sequenceMaximumDuration"`
	SequenceSteps           []GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep `json:"sequenceSteps"`
}
