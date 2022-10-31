package shared

type IncidentTemplate struct {
	DedupeString        *string                  `json:"dedupeString,omitempty"`
	Impact              int64                    `json:"impact"`
	NotificationTargets []NotificationTargetItem `json:"notificationTargets,omitempty"`
	Summary             *string                  `json:"summary,omitempty"`
	Title               string                   `json:"title"`
}
