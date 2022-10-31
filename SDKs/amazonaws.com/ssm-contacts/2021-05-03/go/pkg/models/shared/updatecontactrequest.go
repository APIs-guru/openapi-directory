package shared

type UpdateContactRequest struct {
	ContactID   string  `json:"ContactId"`
	DisplayName *string `json:"DisplayName,omitempty"`
	Plan        *Plan   `json:"Plan,omitempty"`
}
