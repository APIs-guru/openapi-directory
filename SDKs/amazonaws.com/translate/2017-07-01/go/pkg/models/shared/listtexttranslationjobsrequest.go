package shared

type ListTextTranslationJobsRequest struct {
	Filter     *TextTranslationJobFilter `json:"Filter"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
