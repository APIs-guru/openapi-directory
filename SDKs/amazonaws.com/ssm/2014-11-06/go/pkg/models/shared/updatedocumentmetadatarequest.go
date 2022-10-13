package shared

type UpdateDocumentMetadataRequest struct {
	DocumentReviews DocumentReviews `json:"DocumentReviews"`
	DocumentVersion *string         `json:"DocumentVersion"`
	Name            string          `json:"Name"`
}
