package shared

// DocumentMetadataResponseInfo
// Details about the response to a document review request.
type DocumentMetadataResponseInfo struct {
	ReviewerResponse []DocumentReviewerResponseSource `json:"ReviewerResponse,omitempty"`
}
