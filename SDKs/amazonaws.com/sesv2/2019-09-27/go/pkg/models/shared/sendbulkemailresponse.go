package shared

type SendBulkEmailResponse struct {
	BulkEmailEntryResults []BulkEmailEntryResult `json:"BulkEmailEntryResults"`
}
