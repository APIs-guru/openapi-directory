package shared

type ListLicenseVersionsRequest struct {
	LicenseArn string  `json:"LicenseArn"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
