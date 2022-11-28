package shared

type UserEmailViewDefinitionSetting struct {
	Localization        map[string]UserEMailSettingLocalization
	Name                *string
	OptInAggregateValue *int64
	SetByDefault        *bool
	Subscriptions       []UserEmailSubscriptionDefinition
}
