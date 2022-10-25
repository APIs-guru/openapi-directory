package shared

type GoogleAnalyticsAdminV1alphaAudienceFilterExpression struct {
	AndGroup                *GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList    `json:"andGroup,omitempty"`
	DimensionOrMetricFilter *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter `json:"dimensionOrMetricFilter,omitempty"`
	EventFilter             *GoogleAnalyticsAdminV1alphaAudienceEventFilter             `json:"eventFilter,omitempty"`
	NotExpression           *GoogleAnalyticsAdminV1alphaAudienceFilterExpression        `json:"notExpression,omitempty"`
	OrGroup                 *GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList    `json:"orGroup,omitempty"`
}
