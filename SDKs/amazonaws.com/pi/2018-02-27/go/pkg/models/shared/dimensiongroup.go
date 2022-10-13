package shared

type DimensionGroup struct {
	Dimensions []string `json:"Dimensions"`
	Group      string   `json:"Group"`
	Limit      *int64   `json:"Limit"`
}
