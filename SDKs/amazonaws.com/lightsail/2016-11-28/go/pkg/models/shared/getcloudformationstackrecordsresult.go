package shared

type GetCloudFormationStackRecordsResult struct {
	CloudFormationStackRecords []CloudFormationStackRecord `json:"cloudFormationStackRecords,omitempty"`
	NextPageToken              *string                     `json:"nextPageToken,omitempty"`
}
