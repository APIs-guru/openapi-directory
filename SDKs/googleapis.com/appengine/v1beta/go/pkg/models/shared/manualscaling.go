package shared

// ManualScaling
// A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
type ManualScaling struct {
	Instances *int32 `json:"instances,omitempty"`
}
