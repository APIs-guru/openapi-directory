package shared

type GoogleAnalyticsAdminV1alphaAudienceFilterExpression struct {
	AndGroup                *GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList    `json:"andGroup"`
	DimensionOrMetricFilter *GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter `json:"dimensionOrMetricFilter"`
	EventFilter             *GoogleAnalyticsAdminV1alphaAudienceEventFilter             `json:"eventFilter"`
	NotExpression           *GoogleAnalyticsAdminV1alphaAudienceFilterExpression        `json:"notExpression"`
	OrGroup                 *GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList    `json:"orGroup"`
}
