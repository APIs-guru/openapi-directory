package shared

type CustomLabel struct {
	Confidence *float32  `json:"Confidence"`
	Geometry   *Geometry `json:"Geometry"`
	Name       *string   `json:"Name"`
}
