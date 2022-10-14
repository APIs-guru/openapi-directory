package shared

type ListVolumesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
	Volumes       []Volume `json:"volumes,omitempty"`
}
