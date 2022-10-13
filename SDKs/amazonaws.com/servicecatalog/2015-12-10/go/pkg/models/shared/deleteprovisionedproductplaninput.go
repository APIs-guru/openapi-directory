package shared

type DeleteProvisionedProductPlanInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	IgnoreErrors   *bool   `json:"IgnoreErrors"`
	PlanID         string  `json:"PlanId"`
}
