package shared

type SearchPlaceIndexForTextSummary struct {
	BiasPosition    []float64 `json:"BiasPosition,omitempty"`
	DataSource      string    `json:"DataSource"`
	FilterBBox      []float64 `json:"FilterBBox,omitempty"`
	FilterCountries []string  `json:"FilterCountries,omitempty"`
	MaxResults      *int64    `json:"MaxResults,omitempty"`
	ResultBBox      []float64 `json:"ResultBBox,omitempty"`
	Text            string    `json:"Text"`
}
