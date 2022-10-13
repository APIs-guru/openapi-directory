package shared

type ListLicensesResponse struct {
	Licenses  []License `json:"Licenses"`
	NextToken *string   `json:"NextToken"`
}
