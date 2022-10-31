package shared



type GoogleAnalyticsAdminV1alphaAccessFilterExpression struct {
    AccessFilter *GoogleAnalyticsAdminV1alphaAccessFilter `json:"accessFilter,omitempty"`
    AndGroup *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"andGroup,omitempty"`
    NotExpression *GoogleAnalyticsAdminV1alphaAccessFilterExpression `json:"notExpression,omitempty"`
    OrGroup *GoogleAnalyticsAdminV1alphaAccessFilterExpressionList `json:"orGroup,omitempty"`
    
}

