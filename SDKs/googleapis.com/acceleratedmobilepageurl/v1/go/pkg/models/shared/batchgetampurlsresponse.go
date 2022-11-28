package shared

// BatchGetAmpUrlsResponse
// Batch AMP URL response.
type BatchGetAmpUrlsResponse struct {
	AmpUrls   []AmpURL      `json:"ampUrls,omitempty"`
	URLErrors []AmpURLError `json:"urlErrors,omitempty"`
}
