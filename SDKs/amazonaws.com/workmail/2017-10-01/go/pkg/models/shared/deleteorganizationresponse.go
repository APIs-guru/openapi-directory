package shared

type DeleteOrganizationResponse struct {
	OrganizationID *string `json:"OrganizationId,omitempty"`
	State          *string `json:"State,omitempty"`
}
