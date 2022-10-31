package shared



type ResponsePlanSummary struct {
    Arn string `json:"arn"`
    DisplayName *string `json:"displayName,omitempty"`
    Name string `json:"name"`
    
}

