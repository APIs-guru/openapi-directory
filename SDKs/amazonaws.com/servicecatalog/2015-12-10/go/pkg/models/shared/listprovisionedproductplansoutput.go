package shared

type ListProvisionedProductPlansOutput struct {
	NextPageToken           *string                         `json:"NextPageToken"`
	ProvisionedProductPlans []ProvisionedProductPlanSummary `json:"ProvisionedProductPlans"`
}
