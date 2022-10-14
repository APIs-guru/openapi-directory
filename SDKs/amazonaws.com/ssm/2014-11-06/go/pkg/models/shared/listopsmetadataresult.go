package shared

type ListOpsMetadataResult struct {
	NextToken       *string       `json:"NextToken,omitempty"`
	OpsMetadataList []OpsMetadata `json:"OpsMetadataList,omitempty"`
}
