package shared

type GetCelebrityRecognitionRequest struct {
	JobID      string                          `json:"JobId"`
	MaxResults *int64                          `json:"MaxResults"`
	NextToken  *string                         `json:"NextToken"`
	SortBy     *CelebrityRecognitionSortByEnum `json:"SortBy"`
}
