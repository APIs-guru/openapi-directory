package shared

type ListOpsMetadataResult struct {
	NextToken       *string       `json:"NextToken"`
	OpsMetadataList []OpsMetadata `json:"OpsMetadataList"`
}
