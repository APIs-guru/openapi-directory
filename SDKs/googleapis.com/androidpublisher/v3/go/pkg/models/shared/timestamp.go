package shared

type Timestamp struct {
	Nanos   *int32  `json:"nanos,omitempty"`
	Seconds *string `json:"seconds,omitempty"`
}
