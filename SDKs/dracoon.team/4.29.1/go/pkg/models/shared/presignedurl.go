package shared

// PresignedURL
// Presigned URL information
type PresignedURL struct {
	PartNumber int32  `json:"partNumber"`
	URL        string `json:"url"`
}
