package shared

type GoogleAnalyticsAdminV1alphaAccessFilterExpression struct {
	AccessFilter  *GoogleAnalyticsAdminV1alphaAccessFilter               `json:"accessFilter"`
	AndGroup      *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"andGroup"`
	NotExpression *GoogleAnalyticsAdminV1alphaAccessFilterExpression     `json:"notExpression"`
	OrGroup       *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"orGroup"`
}
