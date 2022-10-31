package shared

type Label struct {
	Confidence *float32   `json:"Confidence,omitempty"`
	Instances  []Instance `json:"Instances,omitempty"`
	Name       *string    `json:"Name,omitempty"`
	Parents    []Parent   `json:"Parents,omitempty"`
}
