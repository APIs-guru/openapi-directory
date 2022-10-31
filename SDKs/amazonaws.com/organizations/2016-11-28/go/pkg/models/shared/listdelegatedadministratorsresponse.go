package shared

type ListDelegatedAdministratorsResponse struct {
	DelegatedAdministrators []DelegatedAdministrator `json:"DelegatedAdministrators,omitempty"`
	NextToken               *string                  `json:"NextToken,omitempty"`
}
