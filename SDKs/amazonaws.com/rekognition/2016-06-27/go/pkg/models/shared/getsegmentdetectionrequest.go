package shared

type GetSegmentDetectionRequest struct {
	JobID      string  `json:"JobId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
