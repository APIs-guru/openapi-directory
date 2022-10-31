package shared



type ListLfTagsResponse struct {
    LfTags []LfTagPair `json:"LFTags,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

