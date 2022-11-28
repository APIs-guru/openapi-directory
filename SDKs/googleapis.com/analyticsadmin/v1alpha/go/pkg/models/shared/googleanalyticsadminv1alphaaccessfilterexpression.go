package shared

// GoogleAnalyticsAdminV1alphaAccessFilterExpression
// Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
type GoogleAnalyticsAdminV1alphaAccessFilterExpression struct {
	AccessFilter  *GoogleAnalyticsAdminV1alphaAccessFilter               `json:"accessFilter,omitempty"`
	AndGroup      *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"andGroup,omitempty"`
	NotExpression *GoogleAnalyticsAdminV1alphaAccessFilterExpression     `json:"notExpression,omitempty"`
	OrGroup       *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"orGroup,omitempty"`
}
