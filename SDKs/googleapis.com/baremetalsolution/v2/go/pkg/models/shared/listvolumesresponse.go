package shared

type ListVolumesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
	Volumes       []Volume `json:"volumes"`
}
