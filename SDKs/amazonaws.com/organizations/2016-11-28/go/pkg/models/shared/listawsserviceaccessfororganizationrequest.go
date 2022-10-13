package shared

type ListAwsServiceAccessForOrganizationRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
