package shared

type GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumAudienceClauseTypeUnspecified GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumInclude                       GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "INCLUDE"
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumExclude                       GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "EXCLUDE"
)

// GoogleAnalyticsAdminV1alphaAudienceFilterClause
// A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
type GoogleAnalyticsAdminV1alphaAudienceFilterClause struct {
	ClauseType     *GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum `json:"clauseType,omitempty"`
	SequenceFilter *GoogleAnalyticsAdminV1alphaAudienceSequenceFilter             `json:"sequenceFilter,omitempty"`
	SimpleFilter   *GoogleAnalyticsAdminV1alphaAudienceSimpleFilter               `json:"simpleFilter,omitempty"`
}
