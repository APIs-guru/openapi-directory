package shared

type BigOvenModelInstructionStep struct {
	EndGantt   *int32  `json:"EndGantt"`
	StartGantt *int32  `json:"StartGantt"`
	Text       *string `json:"Text"`
}
