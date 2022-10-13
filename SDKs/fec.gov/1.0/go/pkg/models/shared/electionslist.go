package shared

type ElectionsList struct {
	Cycle    *int32  `json:"cycle"`
	District *string `json:"district"`
	Office   *string `json:"office"`
	State    *string `json:"state"`
}
