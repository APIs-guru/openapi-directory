package shared

type ExecuteProvisionedProductPlanInput struct {
	AcceptLanguage   *string `json:"AcceptLanguage,omitempty"`
	IdempotencyToken string  `json:"IdempotencyToken"`
	PlanID           string  `json:"PlanId"`
}
