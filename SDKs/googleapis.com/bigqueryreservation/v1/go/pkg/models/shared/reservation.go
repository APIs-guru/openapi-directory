package shared

type Reservation struct {
	Concurrency          *string `json:"concurrency"`
	CreationTime         *string `json:"creationTime"`
	IgnoreIdleSlots      *bool   `json:"ignoreIdleSlots"`
	MultiRegionAuxiliary *bool   `json:"multiRegionAuxiliary"`
	Name                 *string `json:"name"`
	SlotCapacity         *string `json:"slotCapacity"`
	UpdateTime           *string `json:"updateTime"`
}
