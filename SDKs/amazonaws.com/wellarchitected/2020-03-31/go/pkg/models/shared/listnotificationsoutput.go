package shared

type ListNotificationsOutput struct {
	NextToken             *string               `json:"NextToken"`
	NotificationSummaries []NotificationSummary `json:"NotificationSummaries"`
}
