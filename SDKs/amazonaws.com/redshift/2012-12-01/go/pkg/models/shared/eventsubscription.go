package shared

import (
	"time"
)

// EventSubscription
// Describes event subscriptions.
type EventSubscription struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []string
	Severity                 *string
	SnsTopicArn              *string
	SourceIdsList            []string
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *time.Time
	Tags                     []Tag
}
