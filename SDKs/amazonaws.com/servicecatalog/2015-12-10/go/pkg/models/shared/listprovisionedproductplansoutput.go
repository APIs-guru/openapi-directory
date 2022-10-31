package shared



type ListProvisionedProductPlansOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ProvisionedProductPlans []ProvisionedProductPlanSummary `json:"ProvisionedProductPlans,omitempty"`
    
}

