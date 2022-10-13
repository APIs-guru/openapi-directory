package shared

type ListOrganizationsResponse struct {
	NextToken             *string               `json:"NextToken"`
	OrganizationSummaries []OrganizationSummary `json:"OrganizationSummaries"`
}
