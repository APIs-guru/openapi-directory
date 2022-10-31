package shared

type ModelYearDistEntry struct {
	BrandName       string  `json:"brandName"`
	ModelName       string  `json:"modelName"`
	PercentOfMarket float64 `json:"percentOfMarket"`
	Year            int64   `json:"year"`
}
