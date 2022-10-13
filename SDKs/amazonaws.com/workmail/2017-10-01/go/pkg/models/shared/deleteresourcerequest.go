package shared

type DeleteResourceRequest struct {
	OrganizationID string `json:"OrganizationId"`
	ResourceID     string `json:"ResourceId"`
}
