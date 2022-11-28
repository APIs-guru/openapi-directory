package shared

// ImagesDeleteAllResponse
// Response for deleting all images.
type ImagesDeleteAllResponse struct {
	Deleted []Image `json:"deleted,omitempty"`
}
