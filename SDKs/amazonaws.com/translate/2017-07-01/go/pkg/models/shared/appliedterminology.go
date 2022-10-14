package shared

type AppliedTerminology struct {
	Name  *string `json:"Name,omitempty"`
	Terms []Term  `json:"Terms,omitempty"`
}
