package shared

// IncidentTemplate
// Basic details used in creating a response plan. The response plan is then used to create an incident record.
type IncidentTemplate struct {
	DedupeString        *string                  `json:"dedupeString,omitempty"`
	Impact              int64                    `json:"impact"`
	NotificationTargets []NotificationTargetItem `json:"notificationTargets,omitempty"`
	Summary             *string                  `json:"summary,omitempty"`
	Title               string                   `json:"title"`
}
