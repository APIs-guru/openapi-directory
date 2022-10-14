package shared

type SearchThingsResponse struct {
	NextToken *string `json:"nextToken,omitempty"`
	Things    []Thing `json:"things,omitempty"`
}
