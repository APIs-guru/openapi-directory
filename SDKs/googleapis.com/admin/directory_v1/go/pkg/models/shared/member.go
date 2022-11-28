package shared

// Member
// A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).
type Member struct {
	DeliverySettings *string `json:"delivery_settings,omitempty"`
	Email            *string `json:"email,omitempty"`
	Etag             *string `json:"etag,omitempty"`
	ID               *string `json:"id,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	Role             *string `json:"role,omitempty"`
	Status           *string `json:"status,omitempty"`
	Type             *string `json:"type,omitempty"`
}
