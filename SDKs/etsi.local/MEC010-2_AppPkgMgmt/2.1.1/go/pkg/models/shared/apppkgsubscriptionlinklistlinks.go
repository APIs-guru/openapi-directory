package shared

// AppPkgSubscriptionLinkListLinks
// Links to resources related to this resource.
type AppPkgSubscriptionLinkListLinks struct {
	Self          LinkType                          `json:"self"`
	Subscriptions []SubscriptionsAppPkgSubscription `json:"subscriptions,omitempty"`
}
