package shared

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
