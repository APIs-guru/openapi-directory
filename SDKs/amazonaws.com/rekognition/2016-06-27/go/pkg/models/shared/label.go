package shared

type Label struct {
	Confidence *float32   `json:"Confidence"`
	Instances  []Instance `json:"Instances"`
	Name       *string    `json:"Name"`
	Parents    []Parent   `json:"Parents"`
}
