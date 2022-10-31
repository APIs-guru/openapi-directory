package shared

type GetLabelDetectionRequest struct {
	JobID      string                    `json:"JobId"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
	SortBy     *LabelDetectionSortByEnum `json:"SortBy,omitempty"`
}
