package shared

type GetFaceSearchRequest struct {
	JobID      string                `json:"JobId"`
	MaxResults *int64                `json:"MaxResults,omitempty"`
	NextToken  *string               `json:"NextToken,omitempty"`
	SortBy     *FaceSearchSortByEnum `json:"SortBy,omitempty"`
}
