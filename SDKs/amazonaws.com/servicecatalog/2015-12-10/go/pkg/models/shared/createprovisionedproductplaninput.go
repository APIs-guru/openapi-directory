package shared

type CreateProvisionedProductPlanInput struct {
	AcceptLanguage         *string                        `json:"AcceptLanguage,omitempty"`
	IdempotencyToken       string                         `json:"IdempotencyToken"`
	NotificationArns       []string                       `json:"NotificationArns,omitempty"`
	PathID                 *string                        `json:"PathId,omitempty"`
	PlanName               string                         `json:"PlanName"`
	PlanType               ProvisionedProductPlanTypeEnum `json:"PlanType"`
	ProductID              string                         `json:"ProductId"`
	ProvisionedProductName string                         `json:"ProvisionedProductName"`
	ProvisioningArtifactID string                         `json:"ProvisioningArtifactId"`
	ProvisioningParameters []UpdateProvisioningParameter  `json:"ProvisioningParameters,omitempty"`
	Tags                   []Tag                          `json:"Tags,omitempty"`
}
