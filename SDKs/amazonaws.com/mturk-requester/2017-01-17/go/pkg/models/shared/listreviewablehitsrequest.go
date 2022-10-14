package shared

type ListReviewableHiTsRequest struct {
	HitTypeID  *string                  `json:"HITTypeId,omitempty"`
	MaxResults *int64                   `json:"MaxResults,omitempty"`
	NextToken  *string                  `json:"NextToken,omitempty"`
	Status     *ReviewableHitStatusEnum `json:"Status,omitempty"`
}
