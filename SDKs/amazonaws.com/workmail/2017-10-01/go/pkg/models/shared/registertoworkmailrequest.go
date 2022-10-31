package shared

type RegisterToWorkMailRequest struct {
	Email          string `json:"Email"`
	EntityID       string `json:"EntityId"`
	OrganizationID string `json:"OrganizationId"`
}
