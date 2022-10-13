package shared

type DimensionKeyDescription struct {
	Dimensions map[string]string `json:"Dimensions"`
	Partitions []float64         `json:"Partitions"`
	Total      *float64          `json:"Total"`
}
