package shared

type ListReceivedLicensesRequest struct {
	Filters     []Filter `json:"Filters"`
	LicenseArns []string `json:"LicenseArns"`
	MaxResults  *int64   `json:"MaxResults"`
	NextToken   *string  `json:"NextToken"`
}
