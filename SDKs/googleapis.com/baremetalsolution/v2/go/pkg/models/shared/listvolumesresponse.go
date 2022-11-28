package shared

// ListVolumesResponse
// Response message containing the list of storage volumes.
type ListVolumesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
	Volumes       []Volume `json:"volumes,omitempty"`
}
