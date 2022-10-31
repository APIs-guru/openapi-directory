package shared



type ListHiTsForQualificationTypeRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    QualificationTypeID string `json:"QualificationTypeId"`
    
}

