package shared

type UpdateContactRequest struct {
	ContactID   string  `json:"ContactId"`
	DisplayName *string `json:"DisplayName"`
	Plan        *Plan   `json:"Plan"`
}
