package shared

type ProvisionedProductPlanSummary struct {
	PlanID                 *string                         `json:"PlanId"`
	PlanName               *string                         `json:"PlanName"`
	PlanType               *ProvisionedProductPlanTypeEnum `json:"PlanType"`
	ProvisionProductID     *string                         `json:"ProvisionProductId"`
	ProvisionProductName   *string                         `json:"ProvisionProductName"`
	ProvisioningArtifactID *string                         `json:"ProvisioningArtifactId"`
}
