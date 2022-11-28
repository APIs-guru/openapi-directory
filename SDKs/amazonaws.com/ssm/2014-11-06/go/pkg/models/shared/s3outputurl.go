package shared

// S3OutputURL
// A URL for the Amazon Web Services Systems Manager (Systems Manager) bucket where you want to store the results of this request.
type S3OutputURL struct {
	OutputURL *string `json:"OutputUrl,omitempty"`
}
