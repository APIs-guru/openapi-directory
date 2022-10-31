package shared



type ResourceGroup struct {
    Arn *string `json:"arn,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    State *ResourceGroupStateEnum `json:"state,omitempty"`
    
}

