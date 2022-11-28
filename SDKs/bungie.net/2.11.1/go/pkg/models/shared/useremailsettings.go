package shared

// UserEmailSettings
// The set of all email subscription/opt-in settings and definitions.
type UserEmailSettings struct {
	OptInDefinitions        map[string]UserEmailOptInDefinition
	SubscriptionDefinitions map[string]UserEmailSubscriptionDefinition
	Views                   map[string]UserEmailViewDefinition
}
