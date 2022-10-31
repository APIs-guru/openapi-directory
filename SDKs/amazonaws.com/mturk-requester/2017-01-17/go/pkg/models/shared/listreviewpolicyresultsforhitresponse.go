package shared



type ListReviewPolicyResultsForHitResponse struct {
    AssignmentReviewPolicy *ReviewPolicy `json:"AssignmentReviewPolicy,omitempty"`
    AssignmentReviewReport *ReviewReport `json:"AssignmentReviewReport,omitempty"`
    HitID *string `json:"HITId,omitempty"`
    HitReviewPolicy *ReviewPolicy `json:"HITReviewPolicy,omitempty"`
    HitReviewReport *ReviewReport `json:"HITReviewReport,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

