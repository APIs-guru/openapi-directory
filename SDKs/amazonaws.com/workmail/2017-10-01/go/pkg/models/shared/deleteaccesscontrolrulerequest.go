package shared

type DeleteAccessControlRuleRequest struct {
	Name           string `json:"Name"`
	OrganizationID string `json:"OrganizationId"`
}
