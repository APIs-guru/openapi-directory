package shared

type Member struct {
	DeliverySettings *string `json:"delivery_settings"`
	Email            *string `json:"email"`
	Etag             *string `json:"etag"`
	ID               *string `json:"id"`
	Kind             *string `json:"kind"`
	Role             *string `json:"role"`
	Status           *string `json:"status"`
	Type             *string `json:"type"`
}
