package shared

type ListReceivedLicensesResponse struct {
	Licenses  []GrantedLicense `json:"Licenses"`
	NextToken *string          `json:"NextToken"`
}
