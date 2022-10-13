package shared

type Experiments struct {
	Items        []Experiment `json:"items"`
	ItemsPerPage *int32       `json:"itemsPerPage"`
	Kind         *string      `json:"kind"`
	NextLink     *string      `json:"nextLink"`
	PreviousLink *string      `json:"previousLink"`
	StartIndex   *int32       `json:"startIndex"`
	TotalResults *int32       `json:"totalResults"`
	Username     *string      `json:"username"`
}
