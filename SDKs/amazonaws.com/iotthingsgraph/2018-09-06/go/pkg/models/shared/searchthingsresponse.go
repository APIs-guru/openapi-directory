package shared

type SearchThingsResponse struct {
	NextToken *string `json:"nextToken"`
	Things    []Thing `json:"things"`
}
