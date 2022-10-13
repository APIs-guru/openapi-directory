package shared

type CreateProvisionedProductPlanInput struct {
	AcceptLanguage         *string                        `json:"AcceptLanguage"`
	IdempotencyToken       string                         `json:"IdempotencyToken"`
	NotificationArns       []string                       `json:"NotificationArns"`
	PathID                 *string                        `json:"PathId"`
	PlanName               string                         `json:"PlanName"`
	PlanType               ProvisionedProductPlanTypeEnum `json:"PlanType"`
	ProductID              string                         `json:"ProductId"`
	ProvisionedProductName string                         `json:"ProvisionedProductName"`
	ProvisioningArtifactID string                         `json:"ProvisioningArtifactId"`
	ProvisioningParameters []UpdateProvisioningParameter  `json:"ProvisioningParameters"`
	Tags                   []Tag                          `json:"Tags"`
}
