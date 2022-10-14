package shared

type UpdateDocumentMetadataRequest struct {
	DocumentReviews DocumentReviews `json:"DocumentReviews"`
	DocumentVersion *string         `json:"DocumentVersion,omitempty"`
	Name            string          `json:"Name"`
}
