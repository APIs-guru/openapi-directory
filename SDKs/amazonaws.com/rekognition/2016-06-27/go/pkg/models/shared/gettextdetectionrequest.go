package shared

type GetTextDetectionRequest struct {
	JobID      string  `json:"JobId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
