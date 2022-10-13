package shared

type GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumAudienceClauseTypeUnspecified GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumInclude                       GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "INCLUDE"
	GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnumExclude                       GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum = "EXCLUDE"
)

type GoogleAnalyticsAdminV1alphaAudienceFilterClause struct {
	ClauseType     *GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum `json:"clauseType"`
	SequenceFilter *GoogleAnalyticsAdminV1alphaAudienceSequenceFilter             `json:"sequenceFilter"`
	SimpleFilter   *GoogleAnalyticsAdminV1alphaAudienceSimpleFilter               `json:"simpleFilter"`
}
