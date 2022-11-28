package shared

// SendBulkEmailResponse
// The following data is returned in JSON format by the service.
type SendBulkEmailResponse struct {
	BulkEmailEntryResults []BulkEmailEntryResult `json:"BulkEmailEntryResults"`
}
