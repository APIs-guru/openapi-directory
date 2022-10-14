package shared

type Dimension struct {
	DimensionKey *string `json:"dimensionKey,omitempty"`
	Name         *string `json:"name,omitempty"`
	Value        *string `json:"value,omitempty"`
}
