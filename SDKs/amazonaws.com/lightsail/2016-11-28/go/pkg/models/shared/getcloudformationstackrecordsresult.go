package shared

type GetCloudFormationStackRecordsResult struct {
	CloudFormationStackRecords []CloudFormationStackRecord `json:"cloudFormationStackRecords"`
	NextPageToken              *string                     `json:"nextPageToken"`
}
