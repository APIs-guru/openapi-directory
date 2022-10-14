package shared

type CreateHitWithHitTypeRequest struct {
	AssignmentReviewPolicy *ReviewPolicy        `json:"AssignmentReviewPolicy,omitempty"`
	HitLayoutID            *string              `json:"HITLayoutId,omitempty"`
	HitLayoutParameters    []HitLayoutParameter `json:"HITLayoutParameters,omitempty"`
	HitReviewPolicy        *ReviewPolicy        `json:"HITReviewPolicy,omitempty"`
	HitTypeID              string               `json:"HITTypeId"`
	LifetimeInSeconds      int64                `json:"LifetimeInSeconds"`
	MaxAssignments         *int64               `json:"MaxAssignments,omitempty"`
	Question               *string              `json:"Question,omitempty"`
	RequesterAnnotation    *string              `json:"RequesterAnnotation,omitempty"`
	UniqueRequestToken     *string              `json:"UniqueRequestToken,omitempty"`
}
