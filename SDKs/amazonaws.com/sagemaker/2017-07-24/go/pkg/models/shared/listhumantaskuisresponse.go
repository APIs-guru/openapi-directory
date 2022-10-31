package shared



type ListHumanTaskUisResponse struct {
    HumanTaskUISummaries []HumanTaskUISummary `json:"HumanTaskUiSummaries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

