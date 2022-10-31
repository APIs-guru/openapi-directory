package shared



type ListWorkersWithQualificationTypeRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    QualificationTypeID string `json:"QualificationTypeId"`
    Status *QualificationStatusEnum `json:"Status,omitempty"`
    
}

