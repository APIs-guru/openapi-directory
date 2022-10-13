package shared

type SearchPlaceIndexForTextSummary struct {
	BiasPosition    []float64 `json:"BiasPosition"`
	DataSource      string    `json:"DataSource"`
	FilterBBox      []float64 `json:"FilterBBox"`
	FilterCountries []string  `json:"FilterCountries"`
	MaxResults      *int64    `json:"MaxResults"`
	ResultBBox      []float64 `json:"ResultBBox"`
	Text            string    `json:"Text"`
}
