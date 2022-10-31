package shared



type GetFindingsFilterResponse struct {
    Action *FindingsFilterActionEnum `json:"action,omitempty"`
    Arn *string `json:"arn,omitempty"`
    Description *string `json:"description,omitempty"`
    FindingCriteria *FindingCriteria `json:"findingCriteria,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Position *int64 `json:"position,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

