package shared

type BucketEntry struct {
	Bucket          float64 `json:"bucket"`
	ModelName       string  `json:"modelName"`
	PercentOfMarket float64 `json:"percentOfMarket"`
}
