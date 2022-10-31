package shared



type ListTerminologiesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TerminologyPropertiesList []TerminologyProperties `json:"TerminologyPropertiesList,omitempty"`
    
}

