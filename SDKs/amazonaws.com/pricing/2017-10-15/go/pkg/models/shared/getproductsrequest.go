package shared

type GetProductsRequest struct {
	Filters       []Filter `json:"Filters,omitempty"`
	FormatVersion *string  `json:"FormatVersion,omitempty"`
	MaxResults    *int64   `json:"MaxResults,omitempty"`
	NextToken     *string  `json:"NextToken,omitempty"`
	ServiceCode   *string  `json:"ServiceCode,omitempty"`
}
