package shared

type ProductSearchResponse struct {
	Href             *string          `json:"href"`
	Limit            *int32           `json:"limit"`
	Next             *string          `json:"next"`
	Offset           *int32           `json:"offset"`
	Prev             *string          `json:"prev"`
	ProductSummaries []ProductSummary `json:"productSummaries"`
	Refinement       *Refinement      `json:"refinement"`
	Total            *int32           `json:"total"`
}
