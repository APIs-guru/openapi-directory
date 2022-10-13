package shared

type ListFilesResponse struct {
	Files         []GoogleDevtoolsArtifactregistryV1File `json:"files"`
	NextPageToken *string                                `json:"nextPageToken"`
}
