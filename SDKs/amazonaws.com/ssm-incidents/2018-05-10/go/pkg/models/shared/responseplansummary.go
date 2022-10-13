package shared

type ResponsePlanSummary struct {
	Arn         string  `json:"arn"`
	DisplayName *string `json:"displayName"`
	Name        string  `json:"name"`
}
