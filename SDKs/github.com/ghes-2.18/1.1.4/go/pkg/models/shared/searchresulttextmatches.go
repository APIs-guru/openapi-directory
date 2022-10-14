package shared

type SearchResultTextMatchesMatches struct {
	Indices []int64 `json:"indices,omitempty"`
	Text    *string `json:"text,omitempty"`
}

type SearchResultTextMatches struct {
	Fragment   *string                          `json:"fragment,omitempty"`
	Matches    []SearchResultTextMatchesMatches `json:"matches,omitempty"`
	ObjectType *string                          `json:"object_type,omitempty"`
	ObjectURL  *string                          `json:"object_url,omitempty"`
	Property   *string                          `json:"property,omitempty"`
}
