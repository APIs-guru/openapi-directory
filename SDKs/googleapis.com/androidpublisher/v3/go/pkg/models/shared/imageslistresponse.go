package shared

// ImagesListResponse
// Response listing all images.
type ImagesListResponse struct {
	Images []Image `json:"images,omitempty"`
}
