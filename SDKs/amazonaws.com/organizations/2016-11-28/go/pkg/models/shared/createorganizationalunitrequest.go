package shared

type CreateOrganizationalUnitRequest struct {
	Name     string `json:"Name"`
	ParentID string `json:"ParentId"`
	Tags     []Tag  `json:"Tags"`
}
