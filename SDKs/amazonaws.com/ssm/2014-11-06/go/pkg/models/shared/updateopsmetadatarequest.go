package shared

type UpdateOpsMetadataRequest struct {
	KeysToDelete     []string                 `json:"KeysToDelete"`
	MetadataToUpdate map[string]MetadataValue `json:"MetadataToUpdate"`
	OpsMetadataArn   string                   `json:"OpsMetadataArn"`
}
