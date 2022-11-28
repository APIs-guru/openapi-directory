package shared

// ListTransferConfigsResponse
// The returned list of pipelines in the project.
type ListTransferConfigsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	TransferConfigs []TransferConfig `json:"transferConfigs,omitempty"`
}
