package shared

type ListReviewableHiTsRequest struct {
	HitTypeID  *string                  `json:"HITTypeId"`
	MaxResults *int64                   `json:"MaxResults"`
	NextToken  *string                  `json:"NextToken"`
	Status     *ReviewableHitStatusEnum `json:"Status"`
}
