package shared

// S3TagCreateRequest
// Request model for creating a S3 tag
type S3TagCreateRequest struct {
	IsMandatory *bool  `json:"isMandatory,omitempty"`
	Key         string `json:"key"`
	Value       string `json:"value"`
}
