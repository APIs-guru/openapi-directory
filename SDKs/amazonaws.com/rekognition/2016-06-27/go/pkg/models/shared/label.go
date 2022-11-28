package shared

// Label
// <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
type Label struct {
	Confidence *float32   `json:"Confidence,omitempty"`
	Instances  []Instance `json:"Instances,omitempty"`
	Name       *string    `json:"Name,omitempty"`
	Parents    []Parent   `json:"Parents,omitempty"`
}
