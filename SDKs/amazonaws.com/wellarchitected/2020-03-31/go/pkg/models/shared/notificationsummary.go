package shared

// NotificationSummary
// A notification summary return object.
type NotificationSummary struct {
	LensUpgradeSummary *LensUpgradeSummary   `json:"LensUpgradeSummary,omitempty"`
	Type               *NotificationTypeEnum `json:"Type,omitempty"`
}
