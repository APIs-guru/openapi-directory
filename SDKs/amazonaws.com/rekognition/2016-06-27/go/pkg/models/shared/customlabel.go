package shared

type CustomLabel struct {
	Confidence *float32  `json:"Confidence,omitempty"`
	Geometry   *Geometry `json:"Geometry,omitempty"`
	Name       *string   `json:"Name,omitempty"`
}
