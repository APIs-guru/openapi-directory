package shared

type GetLabelDetectionRequest struct {
	JobID      string                    `json:"JobId"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
	SortBy     *LabelDetectionSortByEnum `json:"SortBy"`
}
