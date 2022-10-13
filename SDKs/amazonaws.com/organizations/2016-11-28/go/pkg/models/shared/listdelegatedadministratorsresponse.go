package shared

type ListDelegatedAdministratorsResponse struct {
	DelegatedAdministrators []DelegatedAdministrator `json:"DelegatedAdministrators"`
	NextToken               *string                  `json:"NextToken"`
}
