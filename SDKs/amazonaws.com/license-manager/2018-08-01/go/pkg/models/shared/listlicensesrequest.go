package shared

type ListLicensesRequest struct {
	Filters     []Filter `json:"Filters"`
	LicenseArns []string `json:"LicenseArns"`
	MaxResults  *int64   `json:"MaxResults"`
	NextToken   *string  `json:"NextToken"`
}
