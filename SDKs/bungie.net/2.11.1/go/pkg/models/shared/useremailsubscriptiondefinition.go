package shared

// UserEmailSubscriptionDefinition
// Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
type UserEmailSubscriptionDefinition struct {
	Localization map[string]UserEMailSettingSubscriptionLocalization
	Name         *string
	Value        *int64
}
