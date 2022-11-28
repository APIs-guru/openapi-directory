package shared

// Reservation
// A reservation is a mechanism used to guarantee slots to users.
type Reservation struct {
	Concurrency          *string `json:"concurrency,omitempty"`
	CreationTime         *string `json:"creationTime,omitempty"`
	IgnoreIdleSlots      *bool   `json:"ignoreIdleSlots,omitempty"`
	MultiRegionAuxiliary *bool   `json:"multiRegionAuxiliary,omitempty"`
	Name                 *string `json:"name,omitempty"`
	SlotCapacity         *string `json:"slotCapacity,omitempty"`
	UpdateTime           *string `json:"updateTime,omitempty"`
}

// ReservationInput
// A reservation is a mechanism used to guarantee slots to users.
type ReservationInput struct {
	Concurrency          *string `json:"concurrency,omitempty"`
	IgnoreIdleSlots      *bool   `json:"ignoreIdleSlots,omitempty"`
	MultiRegionAuxiliary *bool   `json:"multiRegionAuxiliary,omitempty"`
	Name                 *string `json:"name,omitempty"`
	SlotCapacity         *string `json:"slotCapacity,omitempty"`
}
