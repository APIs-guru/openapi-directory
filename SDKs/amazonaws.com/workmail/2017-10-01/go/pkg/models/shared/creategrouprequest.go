package shared

type CreateGroupRequest struct {
	Name           string `json:"Name"`
	OrganizationID string `json:"OrganizationId"`
}
