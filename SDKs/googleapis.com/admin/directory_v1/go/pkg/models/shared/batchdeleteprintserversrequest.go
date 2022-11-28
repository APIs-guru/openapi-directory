package shared

// BatchDeletePrintServersRequest
// Request to delete multiple existing print servers in a batch.
type BatchDeletePrintServersRequest struct {
	PrintServerIds []string `json:"printServerIds,omitempty"`
}
