package shared

// AppPkgSubscriptionInfo
// 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
type AppPkgSubscriptionInfo struct {
	Links            AppPkgSubscriptionInfoLinks `json:"_links"`
	CallbackURI      string                      `json:"callbackUri"`
	ID               string                      `json:"id"`
	SubscriptionType AppPkgSubscriptionTypeEnum  `json:"subscriptionType"`
}
