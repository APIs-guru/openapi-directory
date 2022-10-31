package shared

type NotificationSummary struct {
	LensUpgradeSummary *LensUpgradeSummary   `json:"LensUpgradeSummary,omitempty"`
	Type               *NotificationTypeEnum `json:"Type,omitempty"`
}
