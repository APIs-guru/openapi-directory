package shared



type ListAssignmentsForHitRequest struct {
    AssignmentStatuses []AssignmentStatusEnum `json:"AssignmentStatuses,omitempty"`
    HitID string `json:"HITId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

