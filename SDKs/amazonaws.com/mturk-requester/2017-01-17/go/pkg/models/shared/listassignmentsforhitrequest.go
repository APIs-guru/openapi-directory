package shared

type ListAssignmentsForHitRequest struct {
	AssignmentStatuses []AssignmentStatusEnum `json:"AssignmentStatuses"`
	HitID              string                 `json:"HITId"`
	MaxResults         *int64                 `json:"MaxResults"`
	NextToken          *string                `json:"NextToken"`
}
