package shared

type AppPkgSubscriptionLinkListLinks struct {
	Self          LinkType                          `json:"self"`
	Subscriptions []SubscriptionsAppPkgSubscription `json:"subscriptions,omitempty"`
}
