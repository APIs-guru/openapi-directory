package shared

type NotificationSummary struct {
	LensUpgradeSummary *LensUpgradeSummary   `json:"LensUpgradeSummary"`
	Type               *NotificationTypeEnum `json:"Type"`
}
