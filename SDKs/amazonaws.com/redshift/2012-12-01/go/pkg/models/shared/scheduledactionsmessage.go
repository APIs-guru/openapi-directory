package shared

type ScheduledActionsMessage struct {
	Marker           *string
	ScheduledActions []ScheduledAction
}
