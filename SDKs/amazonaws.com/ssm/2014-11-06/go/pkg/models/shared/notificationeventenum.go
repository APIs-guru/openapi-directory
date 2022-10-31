package shared

type NotificationEventEnum string

const (
	NotificationEventEnumAll        NotificationEventEnum = "All"
	NotificationEventEnumInProgress NotificationEventEnum = "InProgress"
	NotificationEventEnumSuccess    NotificationEventEnum = "Success"
	NotificationEventEnumTimedOut   NotificationEventEnum = "TimedOut"
	NotificationEventEnumCancelled  NotificationEventEnum = "Cancelled"
	NotificationEventEnumFailed     NotificationEventEnum = "Failed"
)
