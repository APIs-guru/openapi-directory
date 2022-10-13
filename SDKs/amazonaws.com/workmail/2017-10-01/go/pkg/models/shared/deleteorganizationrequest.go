package shared

type DeleteOrganizationRequest struct {
	ClientToken     *string `json:"ClientToken"`
	DeleteDirectory bool    `json:"DeleteDirectory"`
	OrganizationID  string  `json:"OrganizationId"`
}
