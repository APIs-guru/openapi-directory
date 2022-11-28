package shared

// BuiltInSlotTypeSummary
// Provides summary information about a built-in slot type for the <a>ListBuiltInSlotTypes</a> operation.
type BuiltInSlotTypeSummary struct {
	Description       *string `json:"description,omitempty"`
	SlotTypeSignature *string `json:"slotTypeSignature,omitempty"`
}
