package shared

type SearchResultTextMatchesMatches struct {
	Indices []int64 `json:"indices"`
	Text    *string `json:"text"`
}

type SearchResultTextMatches struct {
	Fragment   *string                          `json:"fragment"`
	Matches    []SearchResultTextMatchesMatches `json:"matches"`
	ObjectType *string                          `json:"object_type"`
	ObjectURL  *string                          `json:"object_url"`
	Property   *string                          `json:"property"`
}
