package shared

type IncidentTemplate struct {
	DedupeString        *string                  `json:"dedupeString"`
	Impact              int64                    `json:"impact"`
	NotificationTargets []NotificationTargetItem `json:"notificationTargets"`
	Summary             *string                  `json:"summary"`
	Title               string                   `json:"title"`
}
