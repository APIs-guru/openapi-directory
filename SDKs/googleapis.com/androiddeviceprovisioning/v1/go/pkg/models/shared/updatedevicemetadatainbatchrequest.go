package shared

// UpdateDeviceMetadataInBatchRequest
// Request to update device metadata in batch.
type UpdateDeviceMetadataInBatchRequest struct {
	Updates []UpdateMetadataArguments `json:"updates,omitempty"`
}
