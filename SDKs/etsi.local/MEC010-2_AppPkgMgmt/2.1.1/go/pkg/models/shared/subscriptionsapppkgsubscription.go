package shared

// SubscriptionsAppPkgSubscription
// 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
type SubscriptionsAppPkgSubscription struct {
	Href             string                     `json:"href"`
	SubsctiptionType SubsctiptionTypeAppPkgEnum `json:"subsctiptionType"`
}
