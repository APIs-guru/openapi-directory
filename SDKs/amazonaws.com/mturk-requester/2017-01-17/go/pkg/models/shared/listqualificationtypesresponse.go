package shared



type ListQualificationTypesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    NumResults *int64 `json:"NumResults,omitempty"`
    QualificationTypes []QualificationType `json:"QualificationTypes,omitempty"`
    
}

