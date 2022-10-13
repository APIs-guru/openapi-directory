package shared

type ListDelegatedAdministratorsRequest struct {
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
	ServicePrincipal *string `json:"ServicePrincipal"`
}
