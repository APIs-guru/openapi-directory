package shared

// CreateImportJobResponse
// An HTTP 200 response if the request succeeds, or an error message if the request fails.
type CreateImportJobResponse struct {
	JobID *string `json:"JobId,omitempty"`
}
