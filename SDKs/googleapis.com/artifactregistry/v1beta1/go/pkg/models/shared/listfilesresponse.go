package shared

type ListFilesResponse struct {
	Files         []File  `json:"files"`
	NextPageToken *string `json:"nextPageToken"`
}
