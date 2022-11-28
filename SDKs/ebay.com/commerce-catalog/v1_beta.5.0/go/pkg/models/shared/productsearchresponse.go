package shared

// ProductSearchResponse
// This type contains the specifications for the collection of products that match the search or filter criteria of a search call. A maximum of 200 product summaries is returned (the result set), fewer if you include the limit query parameter in the request.
type ProductSearchResponse struct {
	Href             *string          `json:"href,omitempty"`
	Limit            *int32           `json:"limit,omitempty"`
	Next             *string          `json:"next,omitempty"`
	Offset           *int32           `json:"offset,omitempty"`
	Prev             *string          `json:"prev,omitempty"`
	ProductSummaries []ProductSummary `json:"productSummaries,omitempty"`
	Refinement       *Refinement      `json:"refinement,omitempty"`
	Total            *int32           `json:"total,omitempty"`
}
