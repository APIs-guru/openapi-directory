package shared

type ListReviewPolicyResultsForHitResponse struct {
	AssignmentReviewPolicy *ReviewPolicy `json:"AssignmentReviewPolicy"`
	AssignmentReviewReport *ReviewReport `json:"AssignmentReviewReport"`
	HitID                  *string       `json:"HITId"`
	HitReviewPolicy        *ReviewPolicy `json:"HITReviewPolicy"`
	HitReviewReport        *ReviewReport `json:"HITReviewReport"`
	NextToken              *string       `json:"NextToken"`
}
