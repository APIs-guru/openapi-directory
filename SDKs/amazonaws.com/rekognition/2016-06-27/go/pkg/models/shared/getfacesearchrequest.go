package shared

type GetFaceSearchRequest struct {
	JobID      string                `json:"JobId"`
	MaxResults *int64                `json:"MaxResults"`
	NextToken  *string               `json:"NextToken"`
	SortBy     *FaceSearchSortByEnum `json:"SortBy"`
}
