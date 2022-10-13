package shared

type GetPersonTrackingRequest struct {
	JobID      string                    `json:"JobId"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
	SortBy     *PersonTrackingSortByEnum `json:"SortBy"`
}
