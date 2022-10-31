package shared



type DeleteProvisionedProductPlanInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    IgnoreErrors *bool `json:"IgnoreErrors,omitempty"`
    PlanID string `json:"PlanId"`
    
}

