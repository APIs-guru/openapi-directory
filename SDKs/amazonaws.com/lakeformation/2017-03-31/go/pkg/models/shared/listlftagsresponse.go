package shared

type ListLfTagsResponse struct {
	LfTags    []LfTagPair `json:"LFTags"`
	NextToken *string     `json:"NextToken"`
}
