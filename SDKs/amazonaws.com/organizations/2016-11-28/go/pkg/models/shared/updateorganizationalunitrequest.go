package shared

type UpdateOrganizationalUnitRequest struct {
	Name                 *string `json:"Name"`
	OrganizationalUnitID string  `json:"OrganizationalUnitId"`
}
