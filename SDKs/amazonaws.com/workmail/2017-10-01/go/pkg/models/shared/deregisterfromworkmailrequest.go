package shared

type DeregisterFromWorkMailRequest struct {
	EntityID       string `json:"EntityId"`
	OrganizationID string `json:"OrganizationId"`
}
