package shared

type ListNotificationsOutput struct {
	NextToken             *string               `json:"NextToken,omitempty"`
	NotificationSummaries []NotificationSummary `json:"NotificationSummaries,omitempty"`
}
