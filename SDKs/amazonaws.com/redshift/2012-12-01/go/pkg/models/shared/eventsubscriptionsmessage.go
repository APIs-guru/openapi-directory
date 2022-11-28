package shared

// EventSubscriptionsMessage
// <p/>
type EventSubscriptionsMessage struct {
	EventSubscriptionsList []EventSubscription
	Marker                 *string
}
