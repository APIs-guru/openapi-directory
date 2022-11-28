package shared

// EventSubscriptionsMessage
// Data returned by the <b>DescribeEventSubscriptions</b> action.
type EventSubscriptionsMessage struct {
	EventSubscriptionsList []EventSubscription
	Marker                 *string
}
