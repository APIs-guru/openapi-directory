package shared

type EventSubscription struct {
	CustSubscriptionID       *string
	CustomerAwsID            *string
	Enabled                  *bool
	EventCategoriesList      []string
	ID                       *string
	SnsTopicArn              *string
	SourceIdsList            []string
	SourceType               *string
	Status                   *string
	SubscriptionCreationTime *string
}
