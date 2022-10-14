package shared

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
