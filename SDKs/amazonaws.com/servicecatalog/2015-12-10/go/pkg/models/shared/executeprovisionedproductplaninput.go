package shared

type ExecuteProvisionedProductPlanInput struct {
	AcceptLanguage   *string `json:"AcceptLanguage"`
	IdempotencyToken string  `json:"IdempotencyToken"`
	PlanID           string  `json:"PlanId"`
}
