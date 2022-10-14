package shared

type DimensionGroup struct {
	Dimensions []string `json:"Dimensions,omitempty"`
	Group      string   `json:"Group"`
	Limit      *int64   `json:"Limit,omitempty"`
}
