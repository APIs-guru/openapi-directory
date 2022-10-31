package shared

type UpdatePrimaryEmailAddressRequest struct {
	Email          string `json:"Email"`
	EntityID       string `json:"EntityId"`
	OrganizationID string `json:"OrganizationId"`
}
