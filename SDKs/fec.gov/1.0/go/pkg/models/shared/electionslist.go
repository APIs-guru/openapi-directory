package shared

type ElectionsList struct {
	Cycle    *int32  `json:"cycle,omitempty"`
	District *string `json:"district,omitempty"`
	Office   *string `json:"office,omitempty"`
	State    *string `json:"state,omitempty"`
}
