package shared

type AppPkgSubscriptionInfo struct {
	Links            AppPkgSubscriptionInfoLinks `json:"_links"`
	CallbackURI      string                      `json:"callbackUri"`
	ID               string                      `json:"id"`
	SubscriptionType AppPkgSubscriptionTypeEnum  `json:"subscriptionType"`
}
