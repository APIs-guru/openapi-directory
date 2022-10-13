package shared

type DescribeProvisionedProductPlanInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
	PlanID         string  `json:"PlanId"`
}
