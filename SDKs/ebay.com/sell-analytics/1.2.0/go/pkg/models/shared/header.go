package shared

type Header struct {
	DimensionKeys []Definition `json:"dimensionKeys"`
	Metrics       []Definition `json:"metrics"`
}
