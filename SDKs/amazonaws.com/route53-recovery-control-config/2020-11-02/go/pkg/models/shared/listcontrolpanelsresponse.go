package shared

type ListControlPanelsResponse struct {
	ControlPanels []ControlPanel `json:"ControlPanels"`
	NextToken     *string        `json:"NextToken"`
}
