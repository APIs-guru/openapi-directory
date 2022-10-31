package shared

type PickupSlot struct {
	PickupSlotEndTime   *string `json:"pickupSlotEndTime,omitempty"`
	PickupSlotID        *string `json:"pickupSlotId,omitempty"`
	PickupSlotStartTime *string `json:"pickupSlotStartTime,omitempty"`
	PickupSlotTimeZone  *string `json:"pickupSlotTimeZone,omitempty"`
}
