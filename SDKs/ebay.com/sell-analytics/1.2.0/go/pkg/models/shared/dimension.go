package shared

// Dimension
// The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
type Dimension struct {
	DimensionKey *string `json:"dimensionKey,omitempty"`
	Name         *string `json:"name,omitempty"`
	Value        *string `json:"value,omitempty"`
}
