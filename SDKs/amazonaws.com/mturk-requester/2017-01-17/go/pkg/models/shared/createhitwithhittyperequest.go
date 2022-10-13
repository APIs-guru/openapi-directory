package shared

type CreateHitWithHitTypeRequest struct {
	AssignmentReviewPolicy *ReviewPolicy        `json:"AssignmentReviewPolicy"`
	HitLayoutID            *string              `json:"HITLayoutId"`
	HitLayoutParameters    []HitLayoutParameter `json:"HITLayoutParameters"`
	HitReviewPolicy        *ReviewPolicy        `json:"HITReviewPolicy"`
	HitTypeID              string               `json:"HITTypeId"`
	LifetimeInSeconds      int64                `json:"LifetimeInSeconds"`
	MaxAssignments         *int64               `json:"MaxAssignments"`
	Question               *string              `json:"Question"`
	RequesterAnnotation    *string              `json:"RequesterAnnotation"`
	UniqueRequestToken     *string              `json:"UniqueRequestToken"`
}
