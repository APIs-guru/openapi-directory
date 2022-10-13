package shared

type AppliedTerminology struct {
	Name  *string `json:"Name"`
	Terms []Term  `json:"Terms"`
}
