package shared



type UpdateOpsMetadataRequest struct {
    KeysToDelete []string `json:"KeysToDelete,omitempty"`
    MetadataToUpdate map[string]MetadataValue `json:"MetadataToUpdate,omitempty"`
    OpsMetadataArn string `json:"OpsMetadataArn"`
    
}

