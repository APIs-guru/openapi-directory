package shared

// ResponsePlanSummary
// Details of the response plan that are used when creating an incident.
type ResponsePlanSummary struct {
	Arn         string  `json:"arn"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        string  `json:"name"`
}
