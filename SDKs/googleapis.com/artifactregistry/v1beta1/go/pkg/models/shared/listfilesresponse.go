package shared

// ListFilesResponse
// The response from listing files.
type ListFilesResponse struct {
	Files         []File  `json:"files,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
