package shared

// UserEmailOptInDefinition
// Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
type UserEmailOptInDefinition struct {
	DependentSubscriptions []UserEmailSubscriptionDefinition
	Name                   *string
	SetByDefault           *bool
	Value                  *int64
}
