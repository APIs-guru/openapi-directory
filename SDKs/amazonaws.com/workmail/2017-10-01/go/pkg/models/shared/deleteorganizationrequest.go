package shared

type DeleteOrganizationRequest struct {
	ClientToken     *string `json:"ClientToken,omitempty"`
	DeleteDirectory bool    `json:"DeleteDirectory"`
	OrganizationID  string  `json:"OrganizationId"`
}
