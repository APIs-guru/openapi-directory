package shared

type BigOvenModelInstructionStep struct {
	EndGantt   *int32  `json:"EndGantt,omitempty"`
	StartGantt *int32  `json:"StartGantt,omitempty"`
	Text       *string `json:"Text,omitempty"`
}
