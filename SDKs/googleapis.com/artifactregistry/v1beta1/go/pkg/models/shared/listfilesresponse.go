package shared

type ListFilesResponse struct {
	Files         []File  `json:"files,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
