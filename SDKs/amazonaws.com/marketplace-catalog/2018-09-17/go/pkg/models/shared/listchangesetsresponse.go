package shared



type ListChangeSetsResponse struct {
    ChangeSetSummaryList []ChangeSetSummaryListItem `json:"ChangeSetSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

