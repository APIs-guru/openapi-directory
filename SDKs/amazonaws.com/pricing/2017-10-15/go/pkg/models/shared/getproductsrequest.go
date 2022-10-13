package shared

type GetProductsRequest struct {
	Filters       []Filter `json:"Filters"`
	FormatVersion *string  `json:"FormatVersion"`
	MaxResults    *int64   `json:"MaxResults"`
	NextToken     *string  `json:"NextToken"`
	ServiceCode   *string  `json:"ServiceCode"`
}
