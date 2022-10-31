package shared

type PortRange struct {
	Begin *int64 `json:"Begin,omitempty"`
	End   *int64 `json:"End,omitempty"`
}
