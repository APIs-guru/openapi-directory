package shared



type GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression struct {
    AndGroup *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList `json:"andGroup,omitempty"`
    Filter *GoogleAnalyticsAdminV1alphaExpandedDataSetFilter `json:"filter,omitempty"`
    NotExpression *GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression `json:"notExpression,omitempty"`
    
}

