package shared

// PickupSlot
// This complex type defines a time window for the pickup of a package.
type PickupSlot struct {
	PickupSlotEndTime   *string `json:"pickupSlotEndTime,omitempty"`
	PickupSlotID        *string `json:"pickupSlotId,omitempty"`
	PickupSlotStartTime *string `json:"pickupSlotStartTime,omitempty"`
	PickupSlotTimeZone  *string `json:"pickupSlotTimeZone,omitempty"`
}
