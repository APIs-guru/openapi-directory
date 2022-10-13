package shared

type CreateProvisionedProductPlanOutput struct {
	PlanID                 *string `json:"PlanId"`
	PlanName               *string `json:"PlanName"`
	ProvisionProductID     *string `json:"ProvisionProductId"`
	ProvisionedProductName *string `json:"ProvisionedProductName"`
	ProvisioningArtifactID *string `json:"ProvisioningArtifactId"`
}
