package shared

type ProvisionedProductPlanSummary struct {
	PlanID                 *string                         `json:"PlanId,omitempty"`
	PlanName               *string                         `json:"PlanName,omitempty"`
	PlanType               *ProvisionedProductPlanTypeEnum `json:"PlanType,omitempty"`
	ProvisionProductID     *string                         `json:"ProvisionProductId,omitempty"`
	ProvisionProductName   *string                         `json:"ProvisionProductName,omitempty"`
	ProvisioningArtifactID *string                         `json:"ProvisioningArtifactId,omitempty"`
}
