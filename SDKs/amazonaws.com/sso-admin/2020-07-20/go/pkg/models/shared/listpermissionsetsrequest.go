package shared

type ListPermissionSetsRequest struct {
	InstanceArn string  `json:"InstanceArn"`
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
}
