package shared

type ListFilesResponse struct {
	Files         []GoogleDevtoolsArtifactregistryV1beta2File `json:"files"`
	NextPageToken *string                                     `json:"nextPageToken"`
}
