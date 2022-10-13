package shared

type ListOrganizationPortfolioAccessOutput struct {
	NextPageToken     *string            `json:"NextPageToken"`
	OrganizationNodes []OrganizationNode `json:"OrganizationNodes"`
}
