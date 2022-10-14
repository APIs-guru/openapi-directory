package shared

type ListFilesResponse struct {
	Files         []GoogleDevtoolsArtifactregistryV1beta2File `json:"files,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
