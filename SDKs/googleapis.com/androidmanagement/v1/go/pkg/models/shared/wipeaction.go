package shared

// WipeAction
// An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
type WipeAction struct {
	PreserveFrp   *bool  `json:"preserveFrp,omitempty"`
	WipeAfterDays *int32 `json:"wipeAfterDays,omitempty"`
}
