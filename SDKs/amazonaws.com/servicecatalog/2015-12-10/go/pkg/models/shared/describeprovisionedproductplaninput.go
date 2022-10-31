package shared

type DescribeProvisionedProductPlanInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PageSize       *int64  `json:"PageSize,omitempty"`
	PageToken      *string `json:"PageToken,omitempty"`
	PlanID         string  `json:"PlanId"`
}
