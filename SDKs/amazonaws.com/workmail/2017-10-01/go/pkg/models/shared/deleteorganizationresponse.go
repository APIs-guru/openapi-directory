package shared

type DeleteOrganizationResponse struct {
	OrganizationID *string `json:"OrganizationId"`
	State          *string `json:"State"`
}
