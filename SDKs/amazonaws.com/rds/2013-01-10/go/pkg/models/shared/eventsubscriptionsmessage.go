package shared

type EventSubscriptionsMessage struct {
	EventSubscriptionsList []EventSubscription
	Marker                 *string
}
