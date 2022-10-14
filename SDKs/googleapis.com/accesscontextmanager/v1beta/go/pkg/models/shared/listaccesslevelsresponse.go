package shared

type ListAccessLevelsResponse struct {
	AccessLevels  []AccessLevel `json:"accessLevels,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
