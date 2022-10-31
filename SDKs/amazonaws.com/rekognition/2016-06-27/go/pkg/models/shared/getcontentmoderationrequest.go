package shared

type GetContentModerationRequest struct {
	JobID      string                       `json:"JobId"`
	MaxResults *int64                       `json:"MaxResults,omitempty"`
	NextToken  *string                      `json:"NextToken,omitempty"`
	SortBy     *ContentModerationSortByEnum `json:"SortBy,omitempty"`
}
